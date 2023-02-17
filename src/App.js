import logo from './logo.svg';
import './App.css';
import Documantation from './Screens/Documantation/Documantation';
import MainScreen from './Screens/MainScreen/MainScreen';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainScreen />} />
          <Route path='/documantation' element={<Documantation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
