import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { links } from '../../../assets/data/data'
import NavBarLink from './NavBarLink'
import NavBarLinksResponsive from './NavBarLinksResponsive'
import UseWindowDimensions  from './UseWindowDimensions'





function NavBarContainer() {

  const [scroll, setScroll] = useState(false)

  const { width } = UseWindowDimensions(); 
  let responsive = width<1000 ? true : false

  window.onscroll = function() {
    window.scrollY > 200 ? setScroll(true) : setScroll(false)
    
  };
  
  return (
    <div className= {scroll ? 'navBarLink_container_off': 'navBarLink_container_on'} id='navBarLink_container'>
      <div className='navBar_name'>
        <p className='navBar_name_p'>CARLOS LUNA</p>
      </div>
      {responsive ? <NavBarLinksResponsive links={links} FontAwesomeIcon={FontAwesomeIcon}/> : <NavBarLink links={links} FontAwesomeIcon={FontAwesomeIcon}/>}
      <div>
      {scroll ? <a className='navBar_whatsapp' href="https://api.whatsapp.com/send?phone=541127975106" target="_blank" rel='noopener'><img src="./images/icon/Whatsapp_icon-icons.com_66931.ico" alt="telefono" /></a>: null}
      </div>
    </div>


  )
}

export default NavBarContainer