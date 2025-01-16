import '../../SharedCSS/SharedCard.css'

const BookCard = (props) => {

    return (
        <article className="shared-card">
            <div className="shared-card-image-wrapper">
                <img className="shared-card-image" src={props.url} alt=""/>
            </div>
            <div className="shared-card-subcategory-wrapper">
                    <p className="shared-card-subcategory"><span className='shared-subcategory-span'>{props.subcategory}</span></p>
                </div>
            <div className="shared-card-content-wrapper">
                <div className="shared-card-date-wrapper">
                    <p className="shared-card-date">{props.date}</p>
                </div>
                <div className="shared-card-title-wrapper">
                    <h3 className="shared-card-title">{props.title}</h3>
                </div>
                <div className="shared-card-text-wrapper">
                    <p className="shared-card-text">{props.content.substring(0, 130) + "..."}</p>
                </div>
                <div className="shared-card-button-wrapper">
                    <div className="shared-card-fake-button">Виж &gt;&gt;</div>
                </div>
            </div>
        </article>
    );
};

export default BookCard;