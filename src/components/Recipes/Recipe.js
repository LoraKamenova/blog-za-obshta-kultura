import { React, Component } from 'react';
import '../Recipes/Recipe.css';
import { Link } from "react-router-dom";
import data from '../../assets/data.json';

class Recipe extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var post = require(`../../assets/posts/${this.props.id}.json`);
    let obj = data.find(({_id}) => _id == this.props.id);

    return (
      <div className='recipe-page'>
        <div className="recipe">
          <h1 className='recipe-heading'>{post.title}</h1>
          <p className='recipe-paragraph'>{post.introduction}</p>
          <div className='recipe-image-and-ingredientes'>
            <div className='recipe-image-container'>
            {(() => {
              if (post.url[0] === "portrait") {
                return (
                  <img className='recipe-image portrait' src={post.url[1]}></img>
                )
            } else if (post.url[0] === "landscape") {
              return (
                <img className='recipe-image landscape' src={post.url[1]}></img>
              )
            }})()}
            </div>
            <div className='recipe-ingredients-container'>
              <h3>Необходими продукти:</h3>
              <ul className='recipe-ul'>{post.ingredients.map((ingredient => (<li className='recipe-li'><i class="fas fa-shopping-basket"></i> {ingredient}</li>)))}</ul>
            </div>
          </div>
          <div className='recipe-steps-container container'>
            <h3>Начин на приготвяне:</h3>
            <ul className='recipe-ul'>{post.steps.map((step => (<li className='recipe-li'><i class="fas fa-utensil-spoon"></i> {step}</li>)))}</ul>
          </div>
          <div className='recipe-notes-container container'>
            <h3>Бележки:</h3>
            <ul className='recipe-ul'>{post.notes.map((note => (<li className='recipe-li'><i class="fas fa-lightbulb"></i> {note}</li>)))}</ul>
          </div>
        </div>
        {(() => {
              if (post.secondPicture !== "") {
                return (
                  <img className='recipe-image landscape' src={post.secondPicture}></img>
                )
            }})()}

        <div className='tag-container'>
          <span className='tag-span'>Етикети:</span>
          {obj.tags.map((x) => (<Link className='tag-link' to={`/recipes/tags`} state={{tag: `${x}`}}>{x}</Link>))}
        </div>
      </div>
    )
  }
}

export default Recipe;