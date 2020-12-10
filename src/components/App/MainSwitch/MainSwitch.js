import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import MainPage from '../../MainPage/MainPage'
import TrackSearchPage from '../../TrackSearchPage/TrackSearchPage'

const MainSwitch = () => {
    return (
        <Switch>
            <Route exact path="/search">
                <TrackSearchPage />
            </Route>
            <Route path="/">
                <MainPage />
            </Route>
            <Route path="*">
                <Redirect to="/" />
            </Route>
        </Switch>
    )
}

export default MainSwitch
