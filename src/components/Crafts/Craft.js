import { React, Component } from 'react';
import '../Crafts/Craft.css';
import { Link } from "react-router-dom";
import data from '../../assets/data.json';

class Craft extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var post = require(`../../assets/posts/${this.props.id}.json`);
    let obj = data.find(({_id}) => _id == this.props.id);

    return (
      <div className='craft-page'>
        <div className="craft">
          <h1 className='craft-heading'>{post.title}</h1>
          <p className='craft-paragraph'>{post.introduction}</p>

            <div className='craft-image-and-materials'>
              <div className='craft-image-container'>
                <img className='craft-image landscape' src={post.url}></img>
              </div>
              <div className='craft-materials-container'>
                <h3>Необходими материали:</h3>
                <ul className='craft-ul'>{post.materials.map((material => (<li className='craft-li'><i class="fas fa-shopping-basket"></i> {material}</li>)))}</ul>
              </div>
            </div>

            <div className='craft-steps-container'>
              <h3>Стъпки на изпълнение:</h3>
              <ul className='craft-ul'>{post.steps.map((step => (<li className='craft-li'><i class="fas fa-tools"></i> {step}</li>)))}</ul>
            </div>
       
            <div className='craft-notes-container'>
              <h3>Бележки:</h3>
              <ul className='craft-ul'>{post.notes.map((note => (<li className='craft-li'><i class="fas fa-lightbulb"></i> {note}</li>)))}</ul>
            </div>
        </div>
        <div className='craft-tag-container'>
          <span className='craft-tag-span'>eтикети</span>
          {obj.tags.map((x) => (<Link className='craft-tag-link' to={`/crafts/tags`} state={{tag: `${x}`}}>{x}</Link>))}
        </div>
      </div>
    )
  }
}

export default Craft;