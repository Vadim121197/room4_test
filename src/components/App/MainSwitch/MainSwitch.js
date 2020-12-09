import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MainPage from '../../MainPage/MainPage'
import TrackSearchPage from '../../TrackSearchPage/TrackSearchPage'
import ExecutorPage from '../../ExecutorPage/ExecutorPage'

const MainSwitch = () => {
    return (
        <Switch>
            <Route exact path="/">
                <MainPage />
            </Route>
            <Route path="/executor/:id">
                <ExecutorPage />
            </Route>
            <Route path="/search">
                <TrackSearchPage />
            </Route>
            <Route path="*">Not Found</Route>
        </Switch>
    )
}

export default MainSwitch
