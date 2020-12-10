import React from 'react'
import { List } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const TrackItem = ({ track }) => {
    return (
        <List.Item>
            <List.Content>
                <List.Header>
                    <Link to={`/${track.artist.mbid}`}>
                        {track.artist.name}
                    </Link>
                </List.Header>
                <List.Description>{track.name}</List.Description>
                <List.Content>
                    <a href={track.artist.url}>{track.artist.url}</a>
                </List.Content>
            </List.Content>
        </List.Item>
    )
}

TrackItem.propTypes = {
    track: PropTypes.object.isRequired,
}

export default TrackItem
