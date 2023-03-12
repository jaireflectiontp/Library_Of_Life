import React from 'react';
import Registration from "../Forms/Registration";
import { Link } from 'react-router-dom';
import "../../SCSS/FormCSS/_login.scss"
const Signup = () => {
  return (
    <div className='forms'>
       <div className="signUp">
                <h3>SignUp</h3>
                <p className='welcome_msg'>Create an account by filling the bottom details.</p>
                <Registration />
                <div className="loginControl">
                    <Link to='/' className='link'>Back to Login</Link>
                </div>
            </div>
    </div>
  )
}

export default Signup
