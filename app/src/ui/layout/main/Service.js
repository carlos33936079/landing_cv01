import React from 'react'
import GenericTitle from './GenericTitle'
import GenericService from './GenericService'
import {serviceData} from '../../../assets/data/data'


function Service() {
  return (
    <div className='service_container' id='service_container'>
        <GenericTitle title="MY" secondTitle="SERVICE"/>
        <section className='service_secondSeccion'>
        {serviceData.map(service =>{
          return( <GenericService key={service.id} service={service}/> )
        })}
        </section>
    </div>
  )
}

export default Service