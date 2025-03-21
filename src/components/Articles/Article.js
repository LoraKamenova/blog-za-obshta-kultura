import { React, Component } from 'react';
import '../Articles/Article.css';
import { Link } from "react-router-dom";
import data from '../../assets/data.json';
import Sections from './Sections';

class Article extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var post = require(`../../assets/posts/${this.props.id}.json`);
    let obj = data.find(({_id}) => _id == this.props.id);

    return (
      <div className='article-page'>
        <div className="article">
          <h1 className='article-heading'>{post.title}</h1>
          <p className='article-paragraph'>{post.introduction}</p>
          <div>{post.sections.map(section => (<Sections data={section} />))}</div>
          {(() => {
              if (post.link !== "") {
                return (
                  <p>{post.link[0]}<a className='post-link' href={post.link[1]}>тук</a></p>
                )
          }})()}
      </div>

        <div className='article-tag-container'>
          <span className='article-tag-span'>етикети</span>
          {obj.tags.map((x) => (<Link className='article-tag-link' to={`/articles/tags`} state={{tag: `${x}`}}>{x}</Link>))}
        </div>
      </div>
    )
  }
}

export default Article;