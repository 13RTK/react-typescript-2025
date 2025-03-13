import { useEffect } from 'react';
import { useState } from 'react';
import { getForecastWeather } from '../services/apiWeather';
import { Position } from '../types/position';
import { ForecastData, WeatherData } from '../types/weather';

export function useForecastWeather(position: Position) {
  const [weatherForecastList, setWeatherForecastList] = useState<
    ForecastData[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function loadForecastData() {
    setIsLoading(true);

    const weatherData: WeatherData[] = await getForecastWeather(
      position.latitude,
      position.longitude
    );

    const weatherDataList = weatherData;

    const filteredForecastList = weatherDataList
      .map((weatherData) => {
        const weather = weatherData.weather[0];

        return {
          weatherIcon: `https://openweathermap.org/img/wn/${weather.icon}@2x.png`,
          weather: weather.main,
          min: weatherData.main.temp_max,
          max: weatherData.main.temp_min,
          date: weatherData.dt_txt,
        };
      })
      .filter((weatherData) => weatherData.date.includes('12:00:00'))
      .filter((weatherData) => {
        const curDate = new Date().getDate();
        const weatherDate = new Date(weatherData.date).getDate();

        return curDate !== weatherDate;
      });

    setWeatherForecastList(filteredForecastList);

    setIsLoading(false);
  }

  useEffect(() => {
    loadForecastData();
  }, []);

  return { isLoading, weatherForecastList };
}
