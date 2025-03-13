import { Button } from '@mui/material';

import styles from './Home.module.css';

import { useCurrentWeather } from '../../hooks/useCurrentWeather';

import Day from './Day';
import Loading from '../../ui/Loading';

import { Position } from '../../types/position';
import { SetIsHome } from '../../types/state';

function Home({
  setIsHome,
  position,
}: {
  position: Position;
  setIsHome: SetIsHome;
}) {
  const { temperature, weatherIcon, isLoading } = useCurrentWeather(position);

  return (
    <section className={styles.section}>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <Day temperature={temperature} icon={weatherIcon} />
          <Button
            variant="contained"
            size="large"
            onClick={() => setIsHome(false)}
          >
            Get Start
          </Button>
        </>
      )}
    </section>
  );
}
export default Home;
