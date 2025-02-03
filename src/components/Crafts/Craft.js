import { React, Component } from 'react';
import ReactMarkdown from 'react-markdown';
import '../../SharedCSS/SinglePost.css';
import { Link } from "react-router-dom";
import data from '../../assets/data.json';
import rehypeRaw from 'rehype-raw';

class Craft extends Component {
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

    let obj = data.find(({_id}) => _id == this.props.id);

    return (
      <div className='post-page'>
        <div className="post">
          <ReactMarkdown className="post-markdown" children={this.state.terms} rehypePlugins={[rehypeRaw]} />
        </div>
        <div className='tag-container'>
          <span className='tag-span'>eтикети</span>
          {obj.tags.map((x) => (<Link className='tag-link' to={`/crafts/tags`} state={{tag: `${x}`}}>{x}</Link>))}
        </div>
      </div>
    )
  }
}

export default Craft;