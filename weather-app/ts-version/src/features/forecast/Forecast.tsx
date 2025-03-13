import { useForecastWeather } from '../../hooks/useForecastWeather';
import { Position } from '../../types/position';
import { SetIsHome } from '../../types/state';

import Loading from '../../ui/Loading';
import AppNav from './AppNav';
import ForecastList from './ForecastList';

function Forecast({
  setIsHome,
  position,
}: {
  setIsHome: SetIsHome;
  position: Position;
}) {
  const { weatherForecastList, isLoading } = useForecastWeather(position);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <AppNav setIsHome={setIsHome} />

          <ForecastList weatherForecastList={weatherForecastList} />
        </>
      )}
    </>
  );
}
export default Forecast;
