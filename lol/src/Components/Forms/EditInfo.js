import React from 'react'
import Registration from './Registration'
import "../../SCSS/FormCSS/_login.scss"
const EditInfo = () => {
  return (
    <div className='forms'>
      <div className="signUp">
       <h3>Edit Profile</h3>
               <Registration page='edit'/>      
    </div>
    </div>
  )
}

export default EditInfo
