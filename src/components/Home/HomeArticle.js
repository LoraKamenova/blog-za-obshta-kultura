import { React, Component } from 'react';
import Sections from '../Articles/Sections';
import './HomeArticle.css';

class HomeArticle extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var post = require(`../../assets/posts/${this.props.id}.json`);

    return (
      <div className="home-article-section">
        <div className="home-article">
          <h1 className='home-article-heading'>{post.title}</h1>
          <p className='home-article-paragraph'>{post.introduction}</p>
          <div>{post.sections.map(section => (<Sections data={section} />))}</div>
          </div>
      </div>
    )
  }
}

export default HomeArticle;