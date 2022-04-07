import React from 'react'
import About from './About'
import Home from './Home'
import Service from './Service'

function MainContainer() {
  return (
    <div id='main_Container'>
        <Home/>
        <About/>
        <Service/>
    </div>
  )
}

export default MainContainer