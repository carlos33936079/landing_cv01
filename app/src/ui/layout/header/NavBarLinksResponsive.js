import React from 'react'
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'



function NavBarLinksResponsive({links, FontAwesomeIcon}) {


return (

    <div className='navBarLinksResponsive_container'>
            <input type="radio" name="modal" id="navBarLinksResponsive_menu_view" />
            <label htmlFor="navBarLinksResponsive_menu_view"><FontAwesomeIcon className="navBarLinksResponsive_menu_view_icon" icon={faBars}/></label>
            <p className='navBarLinksResponsive_modal'></p>
            <ul className='navBar_responsive_ul' id='navBar_responsive_ul'>
                <p>
                    <input type="radio" name="modal" id="navBarLinksResponsive_menu_close" />
                    <label htmlFor="navBarLinksResponsive_menu_close">CERRAR <FontAwesomeIcon icon={faXmark}/> </label>
                </p>
                {links.map((link) => {
                    return <a key={link.id} className='navBar_responsive_a' href={link.path}><FontAwesomeIcon icon={link.icon}/> {link.name}</a>
                })}
            </ul>
    </div>

    )   
}

export default NavBarLinksResponsive