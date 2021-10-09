import React from 'react'

import logo from '../../assets/img/logo.svg'
import styles from './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <h1>
        <img src={logo} alt="React" />
        <span>React Boilerplate</span>
      </h1>
    </header>
  )
}

export default Header
