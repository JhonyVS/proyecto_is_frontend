import logo from './logo.svg';
//import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {  BrowserRouter as Router,  Routes,  Route} from 'react-router-dom'
import Footer from './components/Footer';
import Promociones from './pages/Promociones';
import RegistroNegocio from './pages/RegistroNegocio';
import RegistroPromo from './pages/RegistroPromo';


function App() {

  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/promociones' element={<Promociones/>} />

          <Route exact path='/registrarNegocio' element={<RegistroNegocio/>} />

          <Route exact path='/registrarPromocion' element={<RegistroPromo/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;