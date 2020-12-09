import React from 'react'
import { NavLink } from 'react-router-dom'

import image from '../../../../resources/last_fm_logo.png'
import styled from '../Header.module.css'

const Logo = () => {
    return (
        <NavLink to="/">
            <img className={styled.logo} src={image} alt="logo" />
        </NavLink>
    )
}

export default Logo
