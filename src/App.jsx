import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Education from "./pages/Education.jsx";
import Experience from "./pages/Experience.jsx";
import Header from './components/Header.jsx'
import Index from './pages/Index.jsx'
import Publications from "./pages/Publications.js";
import Skills from "./pages/Skills.jsx";

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Index/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
