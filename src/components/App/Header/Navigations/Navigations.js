import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from '../Header.module.css'

const Navigations = () => {
    return (
        <nav>
            <ul className={styled.links}>
                <li>
                    <NavLink to="/">Main</NavLink>
                </li>
                <li>
                    <NavLink to="/search">Search Track</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigations
