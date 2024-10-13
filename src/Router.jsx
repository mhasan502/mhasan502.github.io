import {Route, Routes} from 'react-router-dom';
import Scrollify from './components/LocomotiveScroll.jsx';

function Router() {
  return (
    <Routes>
      <Route path={'/*'} element={<Scrollify/>}/>
    </Routes>
  );
}

export default Router;