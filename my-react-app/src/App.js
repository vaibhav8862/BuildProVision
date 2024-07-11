// import logo from './logo.svg';
// import Navbar from './Component/Navbar/Navbars';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Component/Navbar/Navbars';
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import About from './Component/About/About';
import Services from './Component/Services/Services';
import Contact from './Component/Contact/Contact';
import Blog from './Component/Blog/Blog';
function App() {
  return (
    <div>
      <Router>
        <Navbars />



        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/About' exact element={<About/>}/>
         <Route path='/services' exact element={<Services/>}/>
         <Route path='/contact' exact element={<Contact/>}/>
         <Route path='/blog' exact element={<Blog/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
