export const geoApiOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": 'a684aa1fcbmsh02f5a2d7a371870p16185bjsnd122c9b2384a',
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
  
  export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
  export const WEATHER_API_KEY = "6899828b88d91fff28c79fc65f0680c9"; // enter your key from openweather API

// const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'a684aa1fcbmsh02f5a2d7a371870p16185bjsnd122c9b2384a',
// 		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// // 