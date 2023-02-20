import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Navbar from './Components/Navbar';
import CompanyScreen from './Screens/Company/CompanyScreen';
import HeroScreen from './Screens/MainScreen/HeroScreen';
import Footer from './Screens/MainScreen/Footer';
import Register from './Screens/Company/Register';
import UserScreen from './Screens/User/UserScreen';
import UserRegister from './Screens/User/UserRegister';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HeroScreen />} />
          <Route path='/company' element={<CompanyScreen />} />
          <Route path = '/company/register' element={<Register />} />
          <Route path = '/user' element={<UserScreen />} />
          <Route path = '/user/register' element={<UserRegister />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
