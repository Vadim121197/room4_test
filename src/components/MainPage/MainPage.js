import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTracks } from '../../redux/actions/actions'
import { getTracks } from '../../redux/selectors/tracksSelectors'
import TracksList from './TracksList/TracksList'
import { Loader } from 'semantic-ui-react'

import styled from './MainPage.module.css'
import ExecutorPage from '../ExecutorPage/ExecutorPage'
import { Route } from 'react-router-dom'

const MainPage = () => {
    const dispatch = useDispatch()
    const tracks = useSelector(getTracks)

    useEffect(() => {
        dispatch(fetchTracks())
    }, [])

    return (
        <div className={styled.content}>
            {!tracks ? (
                <Loader active />
            ) : (
                <>
                    <TracksList tracks={tracks} />
                    <Route path="/:id">
                        <ExecutorPage />
                    </Route>
                </>
            )}
        </div>
    )
}

export default MainPage
