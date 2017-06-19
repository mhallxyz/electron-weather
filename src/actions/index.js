import axios from "axios";

const API_KEY = "e7e046fc9ad9390c6ead828430787972";
const ROOT_URL = `//api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER"

export default function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`; // add ,uk to url to limit search to the uk
  const request = axios.get(url);


  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
