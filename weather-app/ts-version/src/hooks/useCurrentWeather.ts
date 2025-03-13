import { useState, useEffect } from 'react';

import { getCurrentWeather } from '../services/apiWeather';
import { Position } from '../types/position';
import { Temperature } from '../types/temperature';

export function useCurrentWeather(position: Position) {
  const [temperature, setTemperature] = useState<Temperature>({
    max: 0,
    min: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [weatherIcon, setWeatherIcon] = useState<string>('');

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);

      const weatherData = await getCurrentWeather(
        position.latitude,
        position.longitude
      );

      setTemperature({
        max: weatherData.main.temp_max,
        min: weatherData.main.temp_min,
      });
      setWeatherIcon(weatherData.weather[0].icon);

      setIsLoading(false);
    }

    loadData();
  }, []);

  return { temperature, isLoading, weatherIcon };
}
