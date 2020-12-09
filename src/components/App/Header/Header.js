import React from 'react'

import Logo from './Logo/Logo'
import Navigations from './Navigations/Navigations'

import styled from './Header.module.css'

const Header = () => {
    return (
        <div className={styled.header}>
            <Logo />
            <Navigations />
        </div>
    )
}

export default Header
