import React from 'react'
import { List } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const TrackItem = ({ track }) => {
    return (
        <List.Item>
            <List.Content>
                <List.Header>{track.name}</List.Header>
                <List.Description>{track.artist}</List.Description>
            </List.Content>
        </List.Item>
    )
}

TrackItem.propTypes = {
    track: PropTypes.object.isRequired,
}

export default TrackItem
