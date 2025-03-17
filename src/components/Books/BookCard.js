import '../Books/BookCard.css'

const BookCard = (props) => {

    return (
        <article className="book-card">
            <div className="book-card-image-wrapper">
                <img className="book-card-image" src={props.url} alt=""/>
            </div>

            <div className="book-card-all-content-wrapper">
                <div className="book-card-subcategory-wrapper">
                    <p className="book-card-subcategory"><span className='book-card-subcategory-span'>{props.subcategory}</span></p>
                </div>
                <div className='book-card-content-wrapper'>
                    <div className="book-card-date-wrapper">
                        <p className="book-card-date">{props.date}</p>
                    </div>
                    <div className="book-card-title-wrapper">
                        <h3 className="book-card-title">{props.title}</h3>
                    </div>
                    <div className="book-card-text-wrapper">
                        <p className="book-card-text">{props.content.substring(0, 130) + "..."}</p>
                    </div>
                    <div className="book-card-button-wrapper">
                        <div className="book-card-fake-button">Виж &gt;&gt;</div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BookCard;