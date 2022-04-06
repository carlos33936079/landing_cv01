import React from 'react'


function NavBarLink({links , FontAwesomeIcon}) {


  return (
        <div className='navBar_all_div'>
            <ul className='navBar_all'>
              {links.map((link) => {
                return <li className='navBar_all_li' key={link.id}><a className='navBar_all_a' href={link.path}><FontAwesomeIcon icon={link.icon}/> {link.name}</a></li>
              })}
            </ul>        
        </div>
    
  )
}

export default NavBarLink