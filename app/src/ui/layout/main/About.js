import React from 'react'
import AboutMe from './AboutMe'
import Experience from './Experience'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { education, experience, skills } from '../../../assets/data/data'
import Skill from './Skill'
 
function About() {
  return (
    <div className='about_container' id="about_container">
      <AboutMe/>
      <section className='about_experience_container'>
        <p>EXPERIENCIA & EDUCATION</p>
        <div className='about_experience_box_container'>
          <div className='about_education'>
            <p>EDUCATION</p>
            {education.map(education => {
            return (  <Experience key={education.id} FontAwesomeIcon={FontAwesomeIcon} faBook={faBook} faCalendarDays={faCalendarDays} data={education}/> )})}
          </div>
          <div className='about_education'>
            <p>EXPERIENCIA</p>
            {experience.map(experience => {
            return (  <Experience key={experience.id} FontAwesomeIcon={FontAwesomeIcon} faBook={faBook} faCalendarDays={faCalendarDays} data={experience}/> )})}
          </div>
        </div>
      </section>
      <section className='about_skills_container'>
        <p>SKILL</p> 
        <div className='about_skills_box_container'>
        {skills.map(skills=> {
        return (<Skill key={skills.id} skills={skills}/>)})} 
        </div>
      </section>
    </div>
  )
}

export default About