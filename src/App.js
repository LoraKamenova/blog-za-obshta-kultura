import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';

import AllArticles from './components/Articles/AllArticles';
import ArticleWrapper from './components/Articles/ArticleWrapper';
import ArticleSubcategory from './components/Articles/ArticleSubcategory';

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
        <Route path="/articles/world" element={<ArticleSubcategory subcategory="Места по света"/>}/>
        <Route path="/articles/architecture" element={<ArticleSubcategory subcategory="Архитектурни разкази"/>}/>
        <Route path="/articles/how" element={<ArticleSubcategory subcategory="Как се прави"/>}/>
        <Route path="/articles/stories" element={<ArticleSubcategory subcategory="Историята на"/>}/>
        <Route path="/articles/business-stories" element={<ArticleSubcategory subcategory="Бизнес истории"/>}/>
        <Route path="/articles/food-stories" element={<ArticleSubcategory subcategory="Кулинарни класики"/>}/>
        <Route path="/articles/garden" element={<ArticleSubcategory subcategory="В градината"/>}/>
        <Route path="/articles/sports" element={<ArticleSubcategory subcategory="Правилата на играта"/>}/>
        <Route path="/articles/other" element={<ArticleSubcategory subcategory="Други"/>}/>

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

        <Route path="/words" element={<Words/>}/>

        <Route path="/about" element={<About/>}/>
     </Routes>
    </div>
  );
}
export default App;