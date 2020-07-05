import axios from 'axios'

const tmbd = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})

tmbd.interceptors.request.use((config) => {
    const { method, params } = config

    if (method === 'get') {
        return {
            ...config,
            params: {
                ...params,
                api_key: process.env.REACT_APP_IMDB_V3, // eslint-disable-line
            }
        }
    }

    return config
})

export default tmbd
