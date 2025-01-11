import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Series from './components/Series/Series';


import './App.css';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/series" element={<Series/>}/>
     </Routes>
    </div>
  );
}
export default App;