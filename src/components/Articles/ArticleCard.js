import './ArticleCard.css'

const ArticleCard = (props) => {

    return (
        <article className="article-card">
            <div className="article-card-image-wrapper">
                <img className="article-card-image" src={props.url} alt=""/>
            </div>
            <div className="article-card-content-wrapper">
                <div className="article-card-date-wrapper">
                    <p className="article-card-date"><span className='article-subcategory-span'>{props.subcategory}</span></p>
                </div>
                <div className="article-card-date-wrapper">
                    <p className="article-card-date">{props.date}</p>
                </div>
                <div className="article-card-title-wrapper">
                    <h3 className="article-card-title">{props.title}</h3>
                </div>
                <div className="article-card-text-wrapper">
                    <p className="article-card-text">{props.content.substring(0, 130) + "..."}</p>
                </div>
                <div className="article-card-button-wrapper">
                    <div className="article-card-fake-button">Прочети &gt;&gt;</div>
                </div>
            </div>
        </article>
    );
};

export default ArticleCard;