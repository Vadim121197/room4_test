import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import MainSwitch from './MainSwitch/MainSwitch'
import Header from './Header/Header'

import 'semantic-ui-css/semantic.min.css'

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
