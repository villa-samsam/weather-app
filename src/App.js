
import './App.css';
import Search from './components/search/Search';
import CurrentWeather from './components/current-weather/current-weather';

function App() {

  const handleonSearchChange=(searchData) => {
    console.log(searchData);
  }
  return (
    <div className="container">
        <Search onSearchChange={handleonSearchChange}/>
        <CurrentWeather/>
    </div>
  );
}

export default App;
