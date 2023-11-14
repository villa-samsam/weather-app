
import './App.css';
import Search from './components/search/Search';
import CurrentWeather from './components/current-weather/current-weather';
import {WEATHER_API_URL, WEATHER_API_KEY} from './api';
import {useState} from 'react';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecastWeather, setForecastWeather] = useState(null)


  const handleonSearchChange=(searchData) => {
   const [lat, lon] = searchData.value.split(" ");
   const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
   const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
  
    Promise.all([currentWeatherFetch, forecastFetch ])
    .then( async (response) =>{
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({city: searchData.label, ...weatherResponse});
      setForecastWeather({city: searchData.label, ...forecastResponse});

    })
    .catch((err) =>{
      console.log(err);
    })

  }

  console.log(currentWeather);
  console.log(forecastWeather);


// https://www.youtube.com/watch?v=Reny0cTTv24&list=WL&index=51&t=3314s    55:00

  return (
    <div className="container">
        <Search onSearchChange={handleonSearchChange}/>
        <CurrentWeather data={currentWeather}/>
    </div>
  );
}

export default App;
