import { WeatherData } from '../types/weather';

const API_KEY = '8044c5ff43da29b1a91b760bf3a91592';

export async function getCurrentWeather(lat: number, lon: number) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );

    return await response.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
}

// TODO: Set return type definition
export async function getForecastWeather(
  lat: number,
  lon: number
): Promise<WeatherData[]> {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );

    const data = await response.json();

    return data.list;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
