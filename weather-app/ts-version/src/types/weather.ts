type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type ForecastData = {
  weatherIcon: string;
  weather: string;
  min: number;
  max: number;
  date: string;
};

export type WeatherData = {
  main: {
    temp_max: number;
    temp_min: number;
  };
  weather: Weather[];
  dt_txt: string;
};
