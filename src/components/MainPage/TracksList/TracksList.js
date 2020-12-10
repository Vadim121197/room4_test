import React from 'react'
import PropTypes from 'prop-types'

import { List } from 'semantic-ui-react'
import TrackItem from './TrackItem/TrackItem'

const TracksList = ({ tracks }) => {
    const { track } = tracks

    //Использую индекс для key потому что нету id в track
    return (
        <List divided relaxed>
            {track.map((track, index) => (
                <TrackItem track={track} key={index} />
            ))}
        </List>
    )
}

TracksList.propTypes = {
    tracks: PropTypes.object.isRequired,
}

export default TracksList
