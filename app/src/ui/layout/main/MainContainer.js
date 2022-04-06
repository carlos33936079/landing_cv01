import React from 'react'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Home from './Home'
import Protfolio from './Portfolio'
import Service from './Service'

function MainContainer() {
  return (
    <div id='main_Container'>
        <Home/>
        <About/>
        <Service/>
        <Protfolio/>
        <Blog/>
        <Contact/>
    </div>
  )
}

export default MainContainer