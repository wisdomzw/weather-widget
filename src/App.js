import { useEffect, useState } from 'react';
import './App.css';
import Outlook from './components/Outlook';
import Summary from './components/Summary';

function App() {
  const [weather, setWeather] = useState();

  async function getWeather() {
    await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=Harare&days=1&aqi=no&alerts=no`)
        .then(response => response.json())
        .then(response =>  {
          setWeather(response)
        })
        .catch(err => console.error(err));
  }

  useEffect(() => {
      getWeather();
      console.log(weather);      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div className="App bg-slate-900 my-0 mx-auto mt-10 w-[428px] rounded-3xl px-10 py-10">
      <div className='border border-gray-500 rounded-xl px-7 py-7 bg-gray-800 font-sans'>
        {
          weather ? <Summary weather={weather} /> : <span>Loading...</span>
        }
        <div className='flex justify-between overflow-x-auto mt-6'>
          <Outlook />
          <Outlook />
          <Outlook />
          <Outlook />
          <Outlook />
          <Outlook />
          <Outlook />
          <Outlook />
        </div> 
      </div>
    </div>
  );

}

export default App;
