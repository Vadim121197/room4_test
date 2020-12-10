import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { Button } from 'semantic-ui-react'
import { API_KEY, SEARCH_URL } from '../../data/constants'
import { renderField, validate } from '../../helpers/helpers'
import { getInputValue } from '../../redux/selectors/tracksSelectors'
import styled from './TrackSearchPage.module.css'
import TracksList from './TracksList/TracksList'

const TrackSearchPage = () => {
    const [tracks, setTracks] = useState([])
    const inputValue = useSelector(getInputValue)

    const handler = (e) => {
        e.preventDefault()
        if (inputValue.syncErrors) {
            return
        }
        fetch(
            `${SEARCH_URL}${inputValue.values.name}&api_key=${API_KEY}&format=json`
        )
            .then((res) => res.json())
            .then((json) => setTracks(json.results.trackmatches.track))
    }

    return (
        <div className={styled.container}>
            <form onSubmit={handler} className={styled.forms}>
                <Field
                    name="name"
                    label="Track name"
                    type="text"
                    component={renderField}
                />
                <Button type="submit">Search</Button>
            </form>
            <TracksList tracks={tracks} className={styled.list} />
        </div>
    )
}

export default reduxForm({
    form: 'search',
    validate,
})(TrackSearchPage)
