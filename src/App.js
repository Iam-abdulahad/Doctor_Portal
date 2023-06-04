import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Appointment from './Pages/Home/Appointment/Appointment';
import ContactUs from './Pages/Home/ContactUs/ContactUs';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
