import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function GenericService({service}) {
    console.log(service)

    return (
        <div className='service_secondSeccion_info'>
            <p className='service_secondSeccion_info_icon'><FontAwesomeIcon icon={service.icon}/></p> 
            <p className='service_secondSeccion_info_name'>{service.name}</p>
            <p className='service_secondSeccion_info_description'>{service.description}</p>
        </div>
    )
}

export default GenericService