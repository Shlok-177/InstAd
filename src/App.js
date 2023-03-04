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
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';



const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: '621760fd-5aaa-439a-b939-4238856920aa',
  }),
});


function App() {
  return (
    <>
    <LivepeerConfig client={livepeerClient}>
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
      </LivepeerConfig>
    </>
  );
}

export default App;
