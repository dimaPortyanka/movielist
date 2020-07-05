import React from 'react'

import * as useRemoteData from 'hooks/useRemoteData/useRemoteData'
import RequestStatus from 'hooks/useRemoteData/RequestStatus'
import * as getPopular from 'services/tmdb/getPopular'
import MoviePreview from 'MoviePreview'

const Popular = (props: useRemoteData.Response<getPopular.Response>): JSX.Element => {
    const {
        status,
        data,
        err,
    } = props

    if (status === RequestStatus.FAILURE) {
        return (
            <div>{JSON.stringify(err)}</div>
        )
    }

    if (status === RequestStatus.PENDING || status === RequestStatus.PRISTIN) {
        return (
            <div>
                loading
            </div>
        )
    }

    return (
        <div>
            {data?.movies.map(MoviePreview)}
        </div>
    )
}

export default Popular
