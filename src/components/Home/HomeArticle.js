import { React, Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './HomeArticle.css';
import '../../SharedCSS/SinglePost.css';
import rehypeRaw from 'rehype-raw';

class HomeArticle extends Component {
  constructor(props) {
    super(props)
    this.state = { terms: null }
  }

async componentWillMount() {
    const file = await import(`../../assets/posts/${this.props.id}.md`);
    const response = await fetch(file.default);
    const text = await response.text();
    this.setState({ terms: text })
  }

  render() {
    return (
      <div className="home-article-section">
        <ReactMarkdown className="post-markdown" children={this.state.terms} rehypePlugins={[rehypeRaw]} />
      </div>
    )
  }
}

export default HomeArticle;