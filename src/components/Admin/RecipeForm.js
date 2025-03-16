import { React, useState } from 'react';
import './Forms.css';

const RecipeForm = (props) => { 

    const [text, setText]=useState("");
    const [formData, setFormData] = useState({
        title: "",
        introduction: "",
        url: "",
        ingredients: "",
        steps: "",
        notes: "",
        url2: ""
    });

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        var jsonObject = {};

        let ingredients = formData.ingredients.split(";").map(s => s.trim());
        ingredients = ingredients.filter(item => item);

        let steps = formData.steps.split(";").map(s => s.trim());
        steps = steps.filter(item => item);

        let notes = formData.notes.split(";").map(s => s.trim());
        notes = notes.filter(item => item);

        jsonObject.title = formData.title;
        jsonObject.introduction = formData.introduction;
        jsonObject.url = formData.url;
        jsonObject.ingredients = ingredients;
        jsonObject.steps = steps;
        jsonObject.notes = notes;
        jsonObject.url2 = formData.url2;

        // alert(`${JSON.stringify(jsonObject, null, 4)}`);
        setText(`${JSON.stringify(jsonObject, null, 4)}`);
    };

    function reset(event) {
        event.preventDefault();
        setFormData({ 
            title: "",
            introduction: "",
            url: "",
            ingredients: "",
            steps: "",
            notes: "",
            url2: ""
        });
        setText("");
    };
  
    return (
        <div className='form-page'>
            <form className='form' onSubmit={handleSubmit}>
                <h1 className='form-heading'>Нова рецепта</h1>
                <div className='fields-container'>
                    <div className='form-half'>
                        {/* <label>Заглавие</label> */}
                        <input className='input'
                            type="text" 
                            id="title" 
                            name="title" 
                            placeholder="Заглавие"
                            value={formData.title} 
                            onChange={handleChange}
                        />
                
                        {/* <label>Представяне</label> */}
                        <textarea className='input textarea'
                            id="introduction" 
                            name="introduction" 
                            placeholder="Представяне"
                            rows="5"
                            value={formData.introduction} 
                            onChange={handleChange}
                        />
                
                        {/* <label>Снимка 1</label> */}
                        <input className='input'
                            type="text" 
                            id="url" 
                            name="url" 
                            placeholder="Водеща снимка"
                            value={formData.url} 
                            onChange={handleChange}
                        />
                        {/* <label>Снимка 2</label> */}
                            <input className='input'
                            type="text" 
                            id="url2" 
                            name="url2" 
                            placeholder="Допълнителна снимка"
                            value={formData.url2} 
                            onChange={handleChange}
                        />

                        {/* <label>Необходими продукти</label> */}
                            <textarea className='input textarea'
                            id="ingredients" 
                            name="ingredients" 
                            placeholder="Необходими продукти"
                            rows="12"
                            value={formData.ingredients} 
                            onChange={handleChange}
                        />
                    </div>

                    <div className='form-half'>
                        {/* <label>Стъпки за изпълнение</label> */}
                        <textarea className='input textarea'
                            type="text" 
                            id="steps" 
                            name="steps" 
                            rows="15"
                            placeholder="Стъпки"
                            value={formData.steps} 
                            onChange={handleChange}
                        />

                        {/* <label>Бележки</label> */}
                        <textarea className='input textarea'
                            type="text" 
                            id="notes" 
                            name="notes" 
                            rows="7"
                            placeholder="Бележки"
                            value={formData.notes} 
                            onChange={handleChange}
                        />

                    </div>
                </div>
   
                <div className='button-container'>
                    <button className='form-button' onClick={reset}>Reset</button>
                    <button className='form-button' type="submit">Submit</button>
                </div>
            </form>
            <section className='result-section'>
                <h1 className='result-heading'>JSON</h1>
                <pre className='result-text'>{text}</pre>
            </section>
        </div>
    )
}

export default RecipeForm;