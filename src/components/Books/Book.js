import { React, Component } from 'react';
import data from '../../assets/data.json';
import '../Books/Book.css';
import { Link } from "react-router-dom";

class Book extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var post = require(`../../assets/posts/${this.props.id}.json`);
    let obj = data.find(({_id}) => _id == this.props.id);

    let mark = "";

    switch(post.mark) {
      case 1:
        mark ="📚"
        break;
      case 2:
        mark ="📚📚"
        break;
      case 3:
        mark ="📚📚📚"
        break;
    } 
    
    return (
      <div className='book-page'>
        <div className="book">
          <h1 className='book-heading'>{post.title}</h1>
          <p className='book-introduction'>{post.introduction}</p>
          <div className='book-image-and-info'>
            <div className='book-image-container'>
              <img className='book-image portrait' src={post.url}></img>
            </div>
            <div className='book-info-container'>
              <div className='description'>
                <h3 className='info-heading'>Oписание:</h3>
                <p><span className='description-span'>Заглавие: </span>{post.name}</p>
                <p><span className='description-span'>Автор: </span>{post.author}</p>
                <p><span className='description-span'>Жанр: </span>{post.genre}</p>
                <p><span className='description-span'>Година: </span>{post.year}</p>
                <p><span className='description-span'>Издание: </span>{post.edition}</p>
                <p><span className='description-span'>Издателство: </span>{post.publisher}</p>
                <p><span className='description-span'>Корици: </span>{post.covers}</p>
                <p><span className='description-span'>Страници: </span>{post.pages}</p>
                <p><span className='description-span'>Анотация: </span>{post.annotation}</p>
              </div>
              <div className='book-legend-container container'>
                <h3  className='info-heading'>Легенда:</h3>
                <p>📚 Ще (по)даря книгата</p>
                <p>📚📚 Ще задържа книгата засега</p>
                <p>📚📚📚 Ще запазя книгата и бих я препрочела</p>
              </div>
            </div>
          </div>
          <div className='book-opinion-container container'>
            <ul className='book-ul'>{post.content.map((p => (<li className='book-li'>{p}</li>)))}</ul>
          </div>

          <div className='book-mark-container container'>
            <h3></h3>
            <p>Моята оценка: {mark}</p>
          </div>
        </div>

        <div className='book-tag-container'>
          <span className='book-tag-span'>етикети</span>
          {obj.tags.map((x) => (<Link className='book-tag-link' to={`/books/tags`} state={{tag: `${x}`}}>{x}</Link>))}
        </div>
      </div>
    )
  }
}

export default Book;