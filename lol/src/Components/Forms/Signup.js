import React from 'react';
import Registration from "../Forms/Registration";
import { Link } from 'react-router-dom';
import "../../SCSS/FormCSS/_login.scss"
const Signup = () => {
  return (
    <div>
       <div className="signUp">
                <h3>SignUp</h3>
                <Registration />
                <div className="loginControl">
                    <Link to='/' className='link'>Back to Login</Link>
                </div>
            </div>
    </div>
  )
}

export default Signup
