import './Sections.css'

const Sections = (props) => {
    
    return (
        <section className='post-section'>
            <img className='post-image landscape' src={props.data.url}></img>
            {(() => {
              if (props.data.caption !== "") {
                return (
                    <p className='post-caption'>{props.data.caption}</p>
                )
            }})()}
            <p className='post-caption'>{props.data.caption}</p>
            <div>{props.data.content.map(paragraph => (<p className='post-paragraph'>{paragraph}</p>))}</div>
      </section>
     );
};

export default Sections;