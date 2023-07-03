import React from 'react'
import "../../SCSS/NavCSS/_nav.scss"
import Header from '../Header/Header'

const Contact = () => {
  return (
    <div className='innerPages'>
      <Header/>
      <div>
      <br />
        <h1>Contact Us</h1>
        <hr className='heading_hr' />
        <br />
        <section class="contact" id="contact">
                <div class="contact_container">
                    <div class="connect_me">
                        <div class="input_controls">
                            <input type="text" name="name" />
                            <label for="name">Name</label>
                        </div>
                        <br />
                        <div class="input_controls">
                            <input type="mail" name="email" />
                            <label for="email">Email</label>
                        </div>
                        <br />
                        <div class="msg_controls">
                            <textarea name="message" placeholder="Type your message....." id="" cols="30"
                                rows="10"></textarea>
                            <label for="message">Message</label>
                        </div>

                        <div class="send_btn">
                           <button>send</button>
                        </div>
                    </div>

                    <div class="contact_details">
                        <div class="contact_info">
                            <div class="detail_container">
                                <div class="info_icon"></div>
                                <div class="info_context">jayrautel625@gmail.com</div>
                            </div>

                            <div class="detail_container">
                                <div class="info_icon"></div>
                                <div class="info_context">+91-9146635275</div>
                            </div>

                            <div class="detail_container">
                                <div class="info_icon"></div>
                                <div class="info_context">Khapa, Saoner, Dist-Nagpur, Maharashtra, India 441101</div>
                            </div>
                        </div>
                        <div class="social_contact">
                            <div class="social_links"><a href="https://www.linkedin.com/in/jay-rautel-96b57b20a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJeUkgAYgS86sPZGuPEAnAw%3D%3D">ck</a></div>
                            <div class="social_links"><a href="https://github.com/jaireflectiontp">j</a></div>
                        </div>
                    </div>
                </div>
            </section>
      </div>
    </div>
  )
}

export default Contact
