import { React, Component } from 'react';
import data from '../../assets/data.json';
import '../../SharedCSS/SinglePost.css';
import { Link } from "react-router-dom";

class Book extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var post = require(`../../assets/posts/${this.props.id}.json`);
    let obj = data.find(({_id}) => _id == this.props.id);
    
    return (
      <div className='book-page'>
        <div className="book">
          <h1 className='book-heading'>{post.title}</h1>
          <p className='book-paragraph'>{post.introduction}</p>
          <div className='book-image-and-info'>
            <div className='recipe-image-container'>
              <img className='recipe-image portrait' src={post.url[1]}></img>
            </div>
            <div className='book-info-container'>
              <h3>Лексикон:</h3>
              <ul className='book-ul'>{post.info.map((fact => (<li className='book-li'>{fact}</li>)))}</ul>
            </div>
          </div>
          <div className='book-opinion-container container'>
            <ul className='book-ul'>{post.content.map((p => (<li className='book-li'>{p}</li>)))}</ul>
          </div>
          <div className='recipe-notes-container container'>
            <h3>Бележки:</h3>
            <ul className='recipe-ul'>{post.notes.map((step => (<li className='recipe-li'>{step}</li>)))}</ul>
          </div>
        </div>
        {(() => {
              if (post.secondPicture !== "") {
                return (
                  <img className='recipe-image landscape' src={post.secondPicture}></img>
                )
            }})()}

        <div className='tag-container'>
          <span className='tag-span'>етикети</span>
          {obj.tags.map((x) => (<Link className='tag-link' to={`/books/tags`} state={{tag: `${x}`}}>{x}</Link>))}
        </div>
      </div>
    )
  }
}

export default Book;