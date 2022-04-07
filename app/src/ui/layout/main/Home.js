import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser, faHouseLaptop, faArrowDownLong } from '@fortawesome/free-solid-svg-icons'


function Home() {
  return (
    <div className='home_container' id='home_container'>
      <div className='home_container_inner'>
        <div className='home_inner'>
          <div className='home_image_container'>
            <img className='home_image' src="./images/logos/foto01.jpeg" alt="imagen" />
          </div>
          <div className='home_description_container'>
            <div className='home_description_greeting'>HI THERE!</div>
            <div className='home_description_descriptionTitle'>
              <p>I'M </p>
              <ul>
                <li>CARLOS</li>
                <li>A FONT-END DEVELOPER</li>
              </ul>
            </div>
            <div className='home_description_description'>
              I am a Designer and Front End Developer, I specialize in developing effective and attractive user interfaces for the website.</div>
            <div className='home_description_redes'>
              <a href="https://www.linkedin.com/in/carloslunadv/" target="_blank" ><img src="./images/icon/linkedin_socialnetwork_17441.ico" alt="LINKEDIN" /></a>
              <a href="https://api.whatsapp.com/send?phone=541127975106" target="_blank" rel='noopener'><img src="./images/icon/Whatsapp_37229.ico" alt="telefono" /></a>
              <a href="tel:+541127975106" target="_blank" rel='noopener'><img src="./images/icon/19_104865.ico" alt="telefono" /></a>
              <a href="mailto:carlosluna0788@gmail.com" rel='noopener'><img src="./images/icon/Mail_icon-icons.com_52015.ico" alt="telefono" /></a>
              
            </div>
            <div className='home_description_button'> 
              <button className='home_description_button_1'><a href="#about_container"><FontAwesomeIcon icon={faUser}/> ABOUT ME</a></button>
              <button className='home_description_button_2'><a href="#service_container"><FontAwesomeIcon icon={faHouseLaptop}/> MY SERVICE</a></button>
            </div>
          </div>
        </div>
        <div className='home_displacement_container'>
          <a href='#about_container'><FontAwesomeIcon className='home_displacement_icon' icon={faArrowDownLong}/></a>
        </div>
      </div>
    </div>
  )
}

export default Home