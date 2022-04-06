import React from 'react'
import GenericTitle from './GenericTitle'


function AboutMe() {
  return (
    <div className='about_me_container'>
        <GenericTitle title="ABOUT" secondTitle="ME"/>
        <div className='about_me_secondSeccion'>
            <div className='about_me_secondSeccion_title'>
                <p className='about_me_secondSeccion_title_p1'>HELLO! I´M <span>CARLOS</span></p>
                <p className='about_me_secondSeccion_title_p2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laborum, enim cumque voluptatem quis quod obcaecati, qui veniam et aliquam at culpa quam
                </p>
            <button className='about_me_secondSeccion_button'>DOWNLOAD MY CV</button>
            </div>
            <section className='about_me_secondSeccion_description'>
                <div>
                    <p>Name: <span>Carlos Luna</span></p>
                    <p>Birthdate: <span>11 jul 1988</span></p>
                    <p>Addres: <span>Monte Grande, Bs. As., Argentina</span></p>
                    <p>Experience: <span>1+ year</span></p>
                    <p>State: <span>Available</span></p>
                </div>
                <div>
                    <p>Phone: <span>(+54) 1127975106</span></p>
                    <p>E-mail: <span>carlosluna0788@gmail.com</span></p>
                    <p>Linkedin: <span><a href="https://www.linkedin.com/in/carloslunadv" >/carloslunadv</a></span></p>
                    <p>Lenguage: <span>Spanish and English</span></p>
                    <p>Website: <span>www.example.com</span></p>
                </div>
            </section>
        </div>
    </div>
    ) 
}

export default AboutMe