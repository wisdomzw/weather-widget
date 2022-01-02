import React from 'react'
import { getDay } from 'date-fns'

function Summary(props) {
    const current   = props.weather.current;
    const location  = props.weather.location;
    const forecast  = props.weather.forecast;
    const days      = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    const date      = new Date (location.localtime);
    const day       = days[getDay(date)];

    return (        
        <div className='text-gray-100'>
            <h2 className='text-6xl text-center font-medium ml-10'>{Math.round(current.temp_c)}°<sup>c</sup></h2>
            <p className='text-center font-medium text-2xl my-2 capitalize'>{current.condition.text}</p>
            <ul className='flex text-lg justify-center font-medium'>
                <li>High: {Math.round(forecast.forecastday[0].day.maxtemp_c)}°&nbsp;</li>
                <li>Low: {Math.round(forecast.forecastday[0].day.mintemp_c)}°&nbsp;</li>
                <li>Precip: {forecast.forecastday[0].day.daily_chance_of_rain}%</li>
            </ul>
            
            <p className='text-center text-gray-400 mt-1'>{day} &middot; {location.name}</p>            
        </div>
    )
}

export default Summary
