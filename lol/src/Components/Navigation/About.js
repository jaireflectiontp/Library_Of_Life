import React from 'react'
import "../../SCSS/NavCSS/_nav.scss"
import Header from '../Header/Header'
import about_banner from "../../images/about_img1.jpg"
const About = () => {
  return (
    <div className='innerPages'>
      <Header />
      <div>
        <br />
        <h1>About</h1>
        <hr className='heading_hr' />
        <br />
        <div class="about_container">
          <div className="about_img">
            <img src={about_banner} alt="banner_about" />
          </div>
          <div className="about_lol">
            <p>The Library of Life is a collection of video stories that will give all of us access to new perspectives
              on difficult situations we might be going through. Our stories are about journeys towards recovery and overcoming
              the hurdles of life, how we navigate towards safe harbour when seas are rough.
            </p>
            <div className="about-site">
              <h2>Key Features About Site</h2>
              <ul>
                <li>Login & SignUp Functionality</li>
                <li>Edit Profile Data</li>
                <li>Fetch Api</li>
                <li>React Router Navigation</li>
                <li>Video Upload Fucntionality</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
