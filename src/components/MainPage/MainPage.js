import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTracks } from '../../redux/actions/actions'
import { getIsLoading, getTracks } from '../../redux/selectors/tracksSelectors'
import TracksList from './TracksList/TracksList'
import { Loader } from 'semantic-ui-react'

const MainPage = () => {
    const dispatch = useDispatch()
    const tracks = useSelector(getTracks)

    useEffect(() => {
        dispatch(fetchTracks())
    }, [])

    return <>{!tracks ? <Loader active /> : <TracksList tracks={tracks} />}</>
}

export default MainPage
