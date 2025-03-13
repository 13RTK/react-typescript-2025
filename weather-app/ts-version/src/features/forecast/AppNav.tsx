import { Link, Breadcrumbs } from '@mui/material';
import { SetIsHome } from '../../types/state';

function AppNav({ setIsHome }: { setIsHome: SetIsHome }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" href="#" onClick={() => setIsHome(true)}>
        Home
      </Link>
      <Link underline="always" color="inherit" href="#">
        Forecast
      </Link>
    </Breadcrumbs>
  );
}
export default AppNav;
