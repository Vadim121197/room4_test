import React from 'react'
import TrackItem from './TrackItem/TrackItem'
import { List } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const TracksList = ({ tracks }) => {
    return (
        <List relaxed>
            {tracks.map((track, index) => (
                <TrackItem key={index} track={track} />
            ))}
        </List>
    )
}

TracksList.propTypes = {
    tracks: PropTypes.array.isRequired,
}

export default TracksList
