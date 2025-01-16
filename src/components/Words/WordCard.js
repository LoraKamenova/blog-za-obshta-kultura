import './WordCard.css'

const WordCard = (props) => {

    return (
        <article className="word-card">
            <p className="word-card-word">{props.word}</p>
            <p className="word-card-description">{props.description}</p>
            <p className="word-card-comment">{props.comment}</p>
        </article>
    );
};

export default WordCard;