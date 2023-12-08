import { BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages';
import Company from './pages/company';
import Contact from './pages/contact';
import Products from './pages/products';
import NavBar from './components';


function App() {
  return (
    <div>
      <Router>
        <Header isInHeader={true}/>
        <NavBar isInHeader={true}/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
       </Routes>
       <Footer />
      </Router>
    </div>
  )
}

export default App;
