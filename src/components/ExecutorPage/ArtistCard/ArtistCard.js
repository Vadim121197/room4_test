import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styled from '../ExecutorPage.module.css'

const ArtistCard = ({ artist }) => {
    const { name, bio } = artist.artist

    const img = artist.artist.image[4]['#text']

    return (
        <Card className={styled.card}>
            <Image src={img} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>{bio.content}</Card.Description>
            </Card.Content>
        </Card>
    )
}

ArtistCard.propTypes = {
    artist: PropTypes.object.isRequired,
}

export default ArtistCard
