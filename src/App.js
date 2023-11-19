
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './container/Navbar/Navbar';
import Home from './container/Home/Home'
import Department from './container/Home/Department';
import About from './container/Home/About';
import Contact from  './container/Home/Contact';
import Testimonial from './container/Home/Testimonial';
import Footer from './container/Footer/Footer';

function App() {
  return (

    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[<Home/>,<Department/>,<About/>,<Contact/>,<Testimonial/>]} />
          
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
