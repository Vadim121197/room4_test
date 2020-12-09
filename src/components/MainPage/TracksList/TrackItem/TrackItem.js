import React from 'react'
import { List } from 'semantic-ui-react'

const TrackItem = ({ track }) => {
    console.log(track)
    return (
        <List.Item>
            {/* <Image avatar src="/images/avatar/small/rachel.png" /> */}
            <List.Content>
                <List.Header as="a">{track.artist.name}</List.Header>
                <List.Description>{track.name}</List.Description>
                <List.Content>
                    <a href={track.artist.url}>{track.artist.url}</a>
                </List.Content>
            </List.Content>
        </List.Item>
    )
}

export default TrackItem
