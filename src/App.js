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
import Other from './components/Articles/Series/Other';

import AllRecipes from './components/Recipes/AllRecipes';
import RecipeWrapper from './components/Recipes/RecipeWrapper';
import Salads from './components/Recipes/RecipeSeries/Salads';
import Starters from './components/Recipes/RecipeSeries/Starters';
import Main from './components/Recipes/RecipeSeries/Main';
import Baking from './components/Recipes/RecipeSeries/Baking';
import Desserts from './components/Recipes/RecipeSeries/Desserts';
import Drinks from './components/Recipes/RecipeSeries/Drinks';

import AllBooks from './components/Books/AllBooks';
import BookWrapper from './components/Books/BookWrapper';
import Ficiton from './components/Books/BookSeries/Fiction';
import NonFiction from './components/Books/BookSeries/NonFiction';
import Economics from './components/Books/BookSeries/Economics';
import Bio from './components/Books/BookSeries/Bio';
import Guides from './components/Books/BookSeries/Guides';
import Sofia from './components/Books/BookSeries/Sofia';

import AllCrafts from './components/Crafts/AllCrafts';
import CraftWrapper from './components/Crafts/CraftWrapper';

import Words from './components/Words/Words';

import './App.css';

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
        <Route path="/words" element={<Words/>}/>
        <Route path="/recipes" element={<AllRecipes/>}/>
        <Route path="/recipes/:id" element={<RecipeWrapper/>}/>
        <Route path="/recipes/salads" element={<Salads/>}/>
        <Route path="/recipes/starters" element={<Starters/>}/>
        <Route path="/recipes/main" element={<Main/>}/>
        <Route path="/recipes/baking" element={<Baking/>}/>
        <Route path="/recipes/desserts" element={<Desserts/>}/>
        <Route path="/recipes/drinks" element={<Drinks/>}/>
        <Route path="/books" element={<AllBooks/>}/>
        <Route path="/books/:id" element={<BookWrapper/>}/>
        <Route path="/books/fiction" element={<Ficiton/>}/>
        <Route path="/books/non-fiction" element={<NonFiction/>}/>
        <Route path="/books/economics" element={<Economics/>}/>
        <Route path="/books/bio" element={<Bio/>}/>
        <Route path="/books/guides" element={<Guides/>}/>
        <Route path="/books/sofia" element={<Sofia/>}/>
        <Route path="/crafts" element={<AllCrafts/>}/>
        <Route path="/crafts/:id" element={<CraftWrapper/>}/>
        <Route path="/about" element={<Home/>}/>
     </Routes>
    </div>
  );
}
export default App;