import './HomeCard.css'

const HomeCard = (props) => { 

    return (
        <div className='home-card-wrapper'>
            <img className='home-card-image' src={props.url}></img>
            <div className='home-card-text-wrapper'>
                <h3 className="home-card-title">{props.title}</h3>
                <p className="home-card-date">{props.date}</p>
                <p className="home-card-content">{props.content}</p>
            </div>
            <div className="home-card-button-wrapper">
                <div className="home-card-fake-button">Прочети</div>
            </div>
        </div>
    );
};

export default HomeCard;