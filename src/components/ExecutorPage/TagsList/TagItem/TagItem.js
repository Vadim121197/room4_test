import React from 'react'
import { List } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const TagItem = ({ tag }) => {
    const { name, url } = tag
    return (
        <List.Item>
            <List.Icon name="github" size="large" verticalAlign="middle" />
            <List.Content>
                <List.Header>{name}</List.Header>
                <List.Description>
                    <a href={url}>{url}</a>
                </List.Description>
            </List.Content>
        </List.Item>
    )
}

TagItem.propTypes = {
    tag: PropTypes.object.isRequired,
}

export default TagItem
