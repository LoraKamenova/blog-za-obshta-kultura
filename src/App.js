import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AllArticles from './components/Articles/AllArticles';
import ArticleWrapper from './components/Articles/ArticleWrapper';
import World from './components/Articles/Series/World';
import Architecture from './components/Articles/Series/Architecture';
import How from './components/Articles/Series/How';
import Stories from './components/Articles/Series/Stories';
import BusinessStories from './components/Articles/Series/BusinessStories';
import FoodStories from './components/Articles/Series/FoodStories';
import Garden from './components/Articles/Series/Garden';
import Sports from './components/Articles/Series/Sports';

import './App.css';
import Other from './components/Articles/Series/Other';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/articles" element={<AllArticles/>}/>
        <Route path="/articles/:id" element={<ArticleWrapper/>}/>
        <Route path="/articles/world" element={<World/>}/>
        <Route path="/articles/architecture" element={<Architecture/>}/>
        <Route path="/articles/how" element={<How/>}/>
        <Route path="/articles/stories" element={<Stories/>}/>
        <Route path="/articles/business-stories" element={<BusinessStories/>}/>
        <Route path="/articles/food-stories" element={<FoodStories/>}/>
        <Route path="/articles/garden" element={<Garden/>}/>
        <Route path="/articles/sports" element={<Sports/>}/>
        <Route path="/articles/other" element={<Other/>}/>
        <Route path="/words" element={<Home/>}/>
        <Route path="/recipies" element={<Home/>}/>
        <Route path="/recipies/:id" element={<Home/>}/>
        <Route path="/books" element={<Home/>}/>
        <Route path="/books/:id" element={<Home/>}/>
        <Route path="/diy" element={<Home/>}/>
        <Route path="/diy/:id" element={<Home/>}/>
        <Route path="/about" element={<Home/>}/>
     </Routes>
    </div>
  );
}
export default App;