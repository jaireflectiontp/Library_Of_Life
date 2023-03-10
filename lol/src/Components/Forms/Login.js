import React, { useState } from 'react';
import "../../SCSS/FormCSS/_login.scss";
import { Link } from 'react-router-dom'
const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]=useState('')
  const login = () => {

      if (username !== '' && password !== '') {
          const userList = JSON.parse(localStorage.getItem('userList'));
              userList?.map((oldUser) => {
                let currentUser= JSON.parse(oldUser)
                  if (currentUser.username === username && currentUser.password === password) {
                      sessionStorage.username=username
                      window.location.href = '/Home'
                  }
                  else {
                      setError('*Check Details')
                  }
                  
              })
          
      }
      else {
          setError('*Please enter details')
      }
  }

  return (
    <div className='forms'>
      <div className="login">
                <h3>Login</h3>
                <p className='welcome_msg'>Welcome back! Please enter your details.</p>
                <div className='errorMsg'>{error}</div>
                <div className="loginControl">
                    <label>Username:</label>
                    <div className="loginInput">
                        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                    </div>
                </div>
                <div className="loginControl">
                    <label>Password:</label>
                    <div className="loginInput">
                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                </div>
                <div className="loginControl">
                    <button type='button' onClick={login}>Login</button>
                </div>
                <div className="loginControl">
                    <Link to='/SignUp' className='link'>Create Account?</Link>
                </div>
            </div>
    </div>
  )
}

export default Login;
