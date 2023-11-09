import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages';
import Company from './pages/company';
import Contact from './pages/contact';
import Products from './pages/products';
import NavBar from './components';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/company' element={<Company />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App;
