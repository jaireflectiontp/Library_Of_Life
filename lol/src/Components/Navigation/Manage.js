import React, { useContext } from 'react'
import "../../SCSS/NavCSS/_nav.scss"
import Header from '../Header/Header'

const Manage = () => {
  return (
    <div className='innerPages'>
      <Header/>
      <div>
      <br />
        <h1>My Account</h1>
        <hr className='heading_hr' />
        <br />
      </div>
    </div>
  )
}

export default Manage
