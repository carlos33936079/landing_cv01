import React from 'react'


function Experience({ FontAwesomeIcon, faBook, faCalendarDays, data }) {


    return (
        
        <div className='about_box_offset'>
            <span className='about_box_offset_span1'></span>
            <span className='about_box_offset_span2'></span>
            <span className='about_box_offset_span3'></span>
            <div className='about_box_inset'>
                <p className='about_box_inset_title'>{data.title}</p>
                <div>
                    <p><FontAwesomeIcon icon={faBook}/> {data.institution}</p>
                    <p><FontAwesomeIcon icon={faCalendarDays}/> {data.date}</p>
                </div>
                <p className='about_box_inset_description'>{data.description}</p>
            </div>
        </div>
        
    )
}

export default Experience