import { React, useState } from 'react';

import './Forms.css';


const RecipeForm = (props) => { 

    const [formData, setFormData] = useState({
        title: "",
        introduction: "",
        url: "",
        ingredients1: "",
        ingredients2: "",
        ingredients3: "",
        step1: "",
        step2: "",
        step3: "",
        note1: "",
        note2: "",
        note3: "",
        url2: "",
    });

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();

    var jsonObject = {};
    let ingredients = [formData.ingredients1, formData.ingredients2, formData.ingredients3];
    let steps = [formData.step1, formData.step2, formData.step3];
    let notes = [formData.note1, formData.note2, formData.note3];

    ingredients = ingredients.filter(item => item);
    steps = steps.filter(item => item);
    notes = notes.filter(item => item);

    jsonObject.title = formData.title;
    jsonObject.introduction = formData.introduction;
    jsonObject.url = formData.url;
    jsonObject.ingredients = ingredients;
    jsonObject.steps = steps;
    jsonObject.notes = notes;
    jsonObject.url2 = formData.url2;


    //alert(`title: ${formData.title}, Intro: ${formData.intro}, Url: ${formData.url}`);
    alert(`${JSON.stringify(jsonObject, null, 4)}`);
  };
  
    return (
    <div className='form-page'>
      <form className='form' onSubmit={handleSubmit}>
        <h1 className='form-title'>Рецепта</h1>
        <label htmlFor="title">Заглавие</label>
        <input 
            type="text" 
            id="title" 
            name="title" 
            value={formData.title} 
            onChange={handleChange}
        />
  
        <label htmlFor="introduction">Увод</label>
        <input 
            type="text" 
            id="introduction" 
            name="introduction" 
            value={formData.introduction} 
            onChange={handleChange}
        />

<       label htmlFor="url">Снимка</label>
        <input 
            type="text" 
            id="url" 
            name="url" 
            value={formData.url} 
            onChange={handleChange}
        />

        <div className='form-ingredients'>
<       label htmlFor="ingredients1">Продукти</label>
        <input 
            type="text" 
            id="ingredients1" 
            name="ingredients1" 
            value={formData.ingredients1} 
            onChange={handleChange}
        />

        <input 
            type="text" 
            id="ingredients2" 
            name="ingredients2" 
            value={formData.ingredients2} 
            onChange={handleChange}
        />

        <input 
            type="text" 
            id="ingredients3" 
            name="ingredients3" 
            value={formData.ingredients3} 
            onChange={handleChange}
        />
        </div>

        <div className='form-steps'>
<       label htmlFor="step1">Стъпки</label>
        <input 
            type="text" 
            id="step1" 
            name="step1" 
            value={formData.step1} 
            onChange={handleChange}
        />

        <input 
            type="text" 
            id="step2" 
            name="step2" 
            value={formData.step2} 
            onChange={handleChange}
        />

        <input 
            type="text" 
            id="step3" 
            name="step3" 
            value={formData.step3} 
            onChange={handleChange}
        />
        </div>

        <div className='form-notes'>
<       label htmlFor="note1">Бележки</label>
        <input 
            type="text" 
            id="note1" 
            name="note1" 
            value={formData.note1} 
            onChange={handleChange}
        />

        <input 
            type="text" 
            id="note2" 
            name="note2" 
            value={formData.note2} 
            onChange={handleChange}
        />

        <input 
            type="text" 
            id="note3" 
            name="note3" 
            value={formData.note3} 
            onChange={handleChange}
        />
        </div>

        <label htmlFor="url2">Снимка 2</label>
        <input 
            type="text" 
            id="url2" 
            name="url2" 
            value={formData.url2} 
            onChange={handleChange}
        />

        {/* <label htmlFor="message">Message:</label>
        <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange}
            /> */}
  
        <button type="submit">Submit</button>
      </form>
      </div>
    )

}

export default RecipeForm;