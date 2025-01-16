import { React, Component } from 'react';
import ReactMarkdown from 'react-markdown';
import '../../SharedCSS/SharedSinglePage.css';

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
    return (
      <div className='shared-section'>
        <div className="shared">
          <ReactMarkdown className="shared-markdown" children={this.state.terms} />
        </div>
      </div>
    )
  }
}

export default Craft;