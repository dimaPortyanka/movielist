import React from 'react'

import {
    Movie,
} from 'services/tmdb/getPopular'

import theme from './MoviePreview.module.css'

const MoviePreview = (props: Movie): JSX.Element => {
    const {
        id,
        backdrop_path: backdropPath,
        title,
        overview,
        poster_path: posterPath,
    } = props
    
    return (
        <div
            className={theme.root}
            key={`movie-${id}`}
        >
            <div
                className={theme.backdrop}
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/w1920_and_h427_multi_faces${backdropPath}")`,
                }}
            />
            <div className={theme.title}>{title}</div>
            <div className={theme.overview}>{overview}</div>
            <img className={theme.poster} alt="poster" src={`https://image.tmdb.org/t/p/w220_and_h330_face${posterPath}`} />
        </div>
    )
}

export default MoviePreview
