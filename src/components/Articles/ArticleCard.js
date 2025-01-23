import '../../SharedCSS/Card.css'

const ArticleCard = (props) => {

    return (
        <article className="card">
            <div className="card-image-wrapper">
                <img className="card-image article-card-image" src={props.url} alt=""/>
            </div>
            <div className="card-subcategory-wrapper">
                <p className="card-subcategory"><span className='card-subcategory-span'>{props.subcategory}</span></p>
            </div>
            <div className="card-content-wrapper">
                <div className="card-date-wrapper">
                    <p className="card-date">{props.date}</p>
                </div>
                <div className="card-title-wrapper">
                    <h3 className="card-title">{props.title}</h3>
                </div>
                <div className="card-text-wrapper">
                    <p className="card-text">{props.content.substring(0, 130) + "..."}</p>
                </div>
                <div className="card-button-wrapper">
                    <div className="card-fake-button">Прочети &gt;&gt;</div>
                </div>
            </div>
        </article>
    );
};

export default ArticleCard;