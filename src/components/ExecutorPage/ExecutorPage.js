import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchExecutor } from '../../redux/actions/executorActions'
import { getExecute } from '../../redux/selectors/executeSelectors'
import { Loader } from 'semantic-ui-react'
import ArtistCard from './ArtistCard/ArtistCard'
import styled from './ExecutorPage.module.css'
import TagsList from './TagsList/TagsList'

const ExecutorPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const artist = useSelector((state) => getExecute(state, id))

    useEffect(() => {
        dispatch(fetchExecutor(id))
    }, [id])

    return (
        <>
            {!artist ? (
                <Loader active />
            ) : (
                <div className={styled.content}>
                    <ArtistCard artist={artist} />
                    <TagsList tags={artist.artist.tags.tag} />
                </div>
            )}
        </>
    )
}

export default ExecutorPage
