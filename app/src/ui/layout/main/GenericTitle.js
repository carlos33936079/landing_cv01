import React from 'react'

function GenericTitle({ title, secondTitle }) {
  return (
    <section className='generic_title' id='about_me_firstSeccion'>
            <p>{title} <span>{secondTitle}</span></p>
            <div className='loading_bar'></div>
        </section>
  )
}

export default GenericTitle