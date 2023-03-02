import React from 'react'
import Left_header from './Left-Header/Left_header'
import Right_header from './Right-Header/Right_header'
import "../../SCSS/HeaderCSS/_header.scss"
const Header = () => {
  return (
    <header>
      <Left_header/>
      <Right_header/>
    </header>
  )
}

export default Header
