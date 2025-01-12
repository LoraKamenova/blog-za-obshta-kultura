import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Header/Navbar';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Series from './components/Series/Series';


import './App.css';
import ArticleWrapper from './components/Article/ArticleWrapper';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<Series/>}/>
        <Route path="/articles/:id" element={<ArticleWrapper/>}/>
        <Route path="/articles/atlas" element={<ArticleWrapper/>}/>
        <Route path="/articles/architecture" element={<ArticleWrapper/>}/>
        <Route path="/articles/how-it-is-made" element={<ArticleWrapper/>}/>
        <Route path="/articles/stories" element={<ArticleWrapper/>}/>
        <Route path="/articles/business-stories" element={<ArticleWrapper/>}/>
        <Route path="/articles/food-stories" element={<ArticleWrapper/>}/>
        <Route path="/words" element={<Series/>}/>
        <Route path="/recipies" element={<Series/>}/>
        <Route path="/recipies/:id" element={<Series/>}/>
        <Route path="/books" element={<Series/>}/>
        <Route path="/books/:id" element={<Series/>}/>
        <Route path="/diy" element={<Series/>}/>
        <Route path="/diy/:id" element={<Series/>}/>
        <Route path="/about" element={<Series/>}/>
     </Routes>
    </div>
  );
}
export default App;