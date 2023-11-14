export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4eb4557998msh69d9b2d0dbfd2f1p194733jsn894160cb7a4b',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"
export const WEATHER_API_KEY = "b6c24c6f6e112f380075d506a78dbcaa"


// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }