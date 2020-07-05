import camelCase from 'lodash/camelCase'

import tmdb from './tmdb'

export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string; // TODO: change to enum
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface Response {
    movies: Movie[];
    page: number;
    totalPages: number;
    totalResults: number;
}

const getPopular = (): Promise<Response | {}> => {
    return tmdb.get('movie/popular')
        .then(({
            data,
        })=>{
            return Object.entries(data)
                .map((keyValue) => {
                    const [
                        key, value,
                    ] = keyValue

                    if (key === 'results'){

                        return ['movies',value,]
                    }

                    return keyValue
                })
                .reduce((res, [key, value,]) => {
                    return {
                        ...res,
                        [camelCase(key)]: value,
                    }
                }, {})
        })
}

export default getPopular
