
import './App.css';
import Search from './components/search/Search';
import Forecast from './components/forecast/forecast'
import CurrentWeather from './components/current-weather/current-weather';
import {WEATHER_API_URL, WEATHER_API_KEY} from './api';
import {useState} from 'react';


function App() {

  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecastWeather, setForecastWeather] = useState(null)


  const handleonSearchChange=(searchData) => {
   const [lat, lon] = searchData.value.split(" ");
   const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
   const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
  
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




  return (
    <div className="container">
        <Search onSearchChange={handleonSearchChange}/>
        {currentWeather && <CurrentWeather data={currentWeather}/>}
       { forecastWeather && <Forecast data={forecastWeather} />}
    </div>
  );
}

export default App;
