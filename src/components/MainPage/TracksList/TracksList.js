import React from 'react'
import { List } from 'semantic-ui-react'
import TrackItem from './TrackItem/TrackItem'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { getTracks } from '../../../redux/selectors/tracksSelectors'

const TracksList = ({ tracks }) => {
    console.log(tracks)
    return (
        <List divided relaxed>
            {tracks.track.map(track => (
                <TrackItem track={track} />
            ))}
        </List>
    )
}

export default TracksList
