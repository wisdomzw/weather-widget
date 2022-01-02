import React from 'react'
import Sunny from '../assets/sunny.svg'

function Outlook() {
    return (
        <div className='flex flex-col text-center text-white mr-10 last:mr-0'>
            <p className='mb-3'>22°</p>
            <img 
                src={Sunny} 
                alt="icon"
                className='inline'
            />
            <p className='text-blue-400 mt-3 mb-2'>15%</p>
            <p>09:00</p>
        </div>
    )
}

export default Outlook
