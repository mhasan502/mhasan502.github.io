import {MemoryRouter, Route, Routes} from 'react-router-dom';
import Index from './pages/Index.jsx'
import Education from './pages/Education.jsx';
import Experience from './pages/Experience.jsx';
import Projects from './pages/Projects.jsx';
import Publications from './pages/Publications.jsx';
import Skills from './pages/Skills.jsx';

function Router() {
	return (
		<MemoryRouter>
			<Routes>
				<Route path={''} element={<Index/>}/>
				<Route path={'/experience/'} element={<Experience/>}/>
				<Route path={'/education/'} element={<Education/>}/>
				<Route path={'/projects/'} element={<Projects/>}/>
				<Route path={'/skills/'} element={<Skills/>}/>
				<Route path={'/publications/'} element={<Publications/>}/>
			</Routes>
		</MemoryRouter>
	);
}

export default Router;