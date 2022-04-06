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
              I am a Designer and Front End Developer, I specialize in developing effective and attractive user interfaces for the website..</div>
            <div className='home_description_redes'>logos</div>
            <div className='home_description_button'> 
              <button className='home_description_button_1'><a href="#about_container"><FontAwesomeIcon icon={faUser}/> ABOUT ME</a></button>
              <button className='home_description_button_2'><a href="#portfolio_container"><FontAwesomeIcon icon={faHouseLaptop}/> MY PORFOLIO</a></button>
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