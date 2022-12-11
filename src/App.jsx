import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CryptoDetail from './pages/CryptoDetail';
import CryptoHome from './pages/CryptoHome';
import Navbar from './components/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import Slider from "./components/Slider.jsx";
import Trending from './components/Trending';
import Tren from './components/Tren';
import "./App.css"

function App() {

  return (

    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element={ <> <Navbar /> <Tren /> <Trending /> <CryptoHome /> </>} className="co" />
        <Route path='/coin/:id' element={<CryptoDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

//       
