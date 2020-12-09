import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import MainSwitch from './MainSwitch/MainSwitch'
import Header from './Header/Header'

import 'semantic-ui-css/semantic.min.css'
import { useDispatch } from 'react-redux'
import { fetchTracks } from '../../redux/actions/actions'

const App = () => {
    return (
        <div className="wrapper">
            <Router>
                <Header />
                <MainSwitch />
            </Router>
        </div>
    )
}

export default App
