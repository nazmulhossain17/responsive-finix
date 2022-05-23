import React from 'react'
import sleeping from '../../../Images/sleeping.jpg'

function NotFound() {
    return (
        <div>
            <h2>Mechanic is slepping</h2>
            <img className='w-100' src={sleeping} alt=""/>
        </div>
    )
}

export default NotFound;
