import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Service from './Pages/Service';
import Contacts from './Pages/Contacts';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/contact' element={<Contacts/>}></Route>
      </Routes>
    </Router>
    </>

  );
}

export default App;
