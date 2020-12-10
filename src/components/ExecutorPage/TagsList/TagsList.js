import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'semantic-ui-react'
import TagItem from './TagItem/TagItem'

const TagsList = ({ tags }) => {
    return (
        <List divided relaxed>
            {tags.map((tag, index) => (
                <TagItem key={index} tag={tag} />
            ))}
        </List>
    )
}

TagsList.propTypes = {
    tags: PropTypes.array.isRequired,
}

export default TagsList
