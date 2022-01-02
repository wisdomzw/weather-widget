import { useEffect, useState } from 'react';
import { getHours, parseISO } from 'date-fns'
import './App.css';
import Summary from './components/Summary';

function App() {
  const [weather, setWeather] = useState();
  
  async function getWeather() {
    await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=Cape+Town&days=1&aqi=no&alerts=no`)
        .then(response => response.json())
        .then(response =>  {
          setWeather(response);
        })
        .catch(err => console.error(err));
  }

  useEffect(() => {
      getWeather();     
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div className="App bg-slate-900 my-0 mx-auto mt-10 w-[428px] rounded-3xl px-10 py-10">
      <div className='border border-gray-500 rounded-xl px-7 py-7 bg-gray-800 font-sans'>
        {
          weather ? <Summary weather={weather} /> : <span>Loading...</span>
        }
        <div className='flex justify-between overflow-x-auto mt-6'>
        {
          weather ? weather.forecast.forecastday[0].hour.map((hour) => {
            const hourOfDay = getHours(parseISO(hour.time));

            return (
              <div className='flex flex-col text-center text-white mr-10 last:mr-0' key={hour.time}>
                  <p className='mb-3'>{Math.round(hour.temp_c)}°</p>
                  <img 
                      src={hour.condition.icon} 
                      alt="icon"
                      className='inline'
                  />
                  <p className='text-blue-400 mt-3 mb-2'>{hour.chance_of_rain}%</p>                  
                  <p>{hourOfDay}:00</p>
                  <p></p>
              </div>)
          })  : <span>Loading...</span> 
        }
        </div> 
      </div>
    </div>
  );

}

export default App;
