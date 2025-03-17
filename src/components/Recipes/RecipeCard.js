import '../Recipes/RecipeCard.css'

const RecipeCard = (props) => {

    return (
        <article className="recipe-card">
            <div className="recipe-card-image-wrapper">
                <img className="recipe-card-image" src={props.url} alt=""/>
            </div>
            <div className="recipe-card-subcategory-wrapper">
                    <p className="recipe-card-subcategory"><span className='recipe-card-subcategory-span'>{props.subcategory}</span></p>
                </div>
            <div className="recipe-card-content-wrapper">
                <div className="recipe-card-date-wrapper">
                    <p className="recipe-card-date">{props.date}</p>
                </div>
                <div className="recipe-card-title-wrapper">
                    <h3 className="recipe-card-title">{props.title}</h3>
                </div>
                <div className="recipe-card-text-wrapper">
                    <p className="recipe-card-text">{props.content.substring(0, 130) + "..."}</p>
                </div>
                <div className="recipe-card-button-wrapper">
                    <div className="recipe-card-fake-button">Виж &gt;&gt;</div>
                </div>
            </div>
        </article>
    );
};

export default RecipeCard;