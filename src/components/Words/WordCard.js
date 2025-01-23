import './WordCard.css'

const WordCard = (props) => {

    return (
        <article className="word-card">
            <p className="word-card-comment">{props.comment}</p>
            <p className="word-card-word"><span className='word-card-word-span'>{props.word}</span></p>
            <p className="word-card-description">{props.description}</p>
        </article>
    );
};

export default WordCard;