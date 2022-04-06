import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function GenericService({service}) {
    console.log(service)

    return (
        <div className='service_secondSeccion_info'>
            <p><FontAwesomeIcon icon={service.icon}/></p> 
            <p>{service.name}</p>
            <p>{service.description}</p>
        </div>
    )
}

export default GenericService