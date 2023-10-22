import Exboard from "./Components/Exboard/Exborad.jsx"
import {  Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home.jsx"
import './App.css'
import ContactUs from './Components/ContactUs/ContactUs.jsx'


function App() {
  return (
    <div classname="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/exboard' element={<Exboard/>}/ >
      </Routes>
      </BrowserRouter>

  </div>

  );
}

export default App;
