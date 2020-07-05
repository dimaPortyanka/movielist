import React from 'react'

import useRemoteData from 'hooks/useRemoteData'
import getPopular from 'services/tmdb/getPopular'

import Popular from './Popular'

const PopularContainer = (): JSX.Element => {
    const state = useRemoteData(getPopular)

    return (
        <Popular {...state} />
    )
}

export default PopularContainer
