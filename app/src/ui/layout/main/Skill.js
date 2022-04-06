import React, { useEffect, useState } from 'react'


function Skill({skills}) {

    const [style, setStyle] = useState({});
    const [count, setCount] = useState(0)
    
useEffect(() => {
    if(count < skills.done){
        setTimeout(() => {
            setCount(count + 1);
        }, 100);
    }
}, [count, skills.done])


	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${skills.done}%`
		}
		setStyle(newStyle);
	}, 200);

    return (
        <div className="progress_container">
            <div className='progress_msj'>
                <p>{skills.name}</p>
                <p>{count}%</p>
            </div>
            <div className="progress">
                <div className="progress-done" style={style}></div>
            </div>
		</div> 
    )
}

export default Skill