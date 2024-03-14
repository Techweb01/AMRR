import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	useNavigate,
  BrowserRouter,
} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
