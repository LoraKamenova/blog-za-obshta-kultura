import '../Crafts/CraftCard.css'

const CraftCard = (props) => {

    return (
        <article className="craft-card">
            <div className="craft-card-image-wrapper">
                <img className="craft-card-image" src={props.url} alt=""/>
            </div>
            {/* <div className="card-subcategory-wrapper">
                    <p className="card-subcategory"><span className='card-subcategory-span'>{props.subcategory}</span></p>
                </div> */}
            <div className="craft-card-content-wrapper">
                <div className="craft-card-date-wrapper">
                    <p className="craft-card-date">{props.date}</p>
                </div>
                <div className="craft-card-title-wrapper">
                    <h3 className="craft-card-title">{props.title}</h3>
                </div>
                <div className="craft-card-text-wrapper">
                    <p className="craft-card-text">{props.content.substring(0, 130) + "..."}</p>
                </div>
                <div className="craft-card-button-wrapper">
                    <div className="craft-card-fake-button">Виж &gt;&gt;</div>
                </div>
            </div>
        </article>
    );
};

export default CraftCard;