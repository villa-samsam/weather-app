
import './App.css';
import Search from './components/search/search';
import currentWeather from './components/current-weather/current-weather'

function App() {

  const handleonSearchChange=(searchData) => {
    console.log(searchData);
  }
  return (
    <div className="container">
        <Search onSearchChange={handleonSearchChange}/>
        <currentWeather/>
    </div>
  );
}

export default App;
