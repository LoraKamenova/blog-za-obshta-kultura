import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';

import AllArticles from './components/Articles/AllArticles';
import ArticleWrapper from './components/Articles/ArticleWrapper';
import ArticleSubcategory from './components/Articles/ArticleSubcategory';

import AllBooks from './components/Books/AllBooks';
import BookWrapper from './components/Books/BookWrapper';
import BookSubcategory from './components/Books/BookSubcategory';

import AllRecipes from './components/Recipes/AllRecipes';
import RecipeWrapper from './components/Recipes/RecipeWrapper';
import RecipeSubcategory from './components/Recipes/RecipeSubcategory';

import AllCrafts from './components/Crafts/AllCrafts';
import CraftWrapper from './components/Crafts/CraftWrapper';
import Words from './components/Words/Words';
import About from './components/About/About';

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
        <Route path="/recipes/salads" element={<RecipeSubcategory subcategory="Салати"/>}/>
        <Route path="/recipes/starters" element={<RecipeSubcategory subcategory="Предястия"/>}/>
        <Route path="/recipes/main" element={<RecipeSubcategory subcategory="Основни"/>}/>
        <Route path="/recipes/baking" element={<RecipeSubcategory subcategory="Тестени"/>}/>
        <Route path="/recipes/desserts" element={<RecipeSubcategory subcategory="Десерти"/>}/>
        <Route path="/recipes/drinks" element={<RecipeSubcategory subcategory="Напитки"/>}/>

        <Route path="/books" element={<AllBooks/>}/>
        <Route path="/books/:id" element={<BookWrapper/>}/>
        <Route path="/books/fiction" element={<BookSubcategory subcategory="Художествена литература"/>}/>
        <Route path="/books/non-fiction" element={<BookSubcategory subcategory="Нехудожествена литература"/>}/>
        <Route path="/books/economics" element={<BookSubcategory subcategory="Икономическа литература"/>}/>
        <Route path="/books/bio" element={<BookSubcategory subcategory="Биографии"/>}/>
        <Route path="/books/guides" element={<BookSubcategory subcategory="Пътеводители"/>}/>
        <Route path="/books/sofia" element={<BookSubcategory subcategory="Книги за София"/>}/>

        <Route path="/crafts" element={<AllCrafts/>}/>
        <Route path="/crafts/:id" element={<CraftWrapper/>}/>

        <Route path="/words" element={<Words/>}/>

        <Route path="/about" element={<About/>}/>
     </Routes>
    </div>
  );
}
export default App;