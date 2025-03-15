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
        ingredients4: "",
        ingredients5: "",
        ingredients6: "",
        ingredients7: "",
        ingredients8: "",
        ingredients9: "",
        ingredients10: "",
        step1: "",
        step2: "",
        step3: "",
        step4: "",
        step5: "",
        step6: "",
        step7: "",
        step8: "",
        step9: "",
        step10: "",
        note1: "",
        note2: "",
        note3: "",
        note4: "",
        note5: "",
        url2: ""
    });

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();

    var jsonObject = {};
    let ingredients = [
        formData.ingredients1, 
        formData.ingredients2, 
        formData.ingredients3,
        formData.ingredients4,
        formData.ingredients5,
        formData.ingredients6,
        formData.ingredients7,
        formData.ingredients8,
        formData.ingredients9,
        formData.ingredients10,
    ];
    let steps = [
        formData.step1, 
        formData.step2, 
        formData.step3,
        formData.step4,
        formData.step5,
        formData.step6,
        formData.step7,
        formData.step8,
        formData.step9,
        formData.step10
    ];
    let notes = [
        formData.note1, 
        formData.note2, 
        formData.note3,
        formData.note4,
        formData.note5
    ];

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
    
    alert(`${JSON.stringify(jsonObject, null, 4)}`);
  };

  function reset(event) {
    event.preventDefault();
    setFormData({ 
        title: "",
        introduction: "",
        url: "",
        ingredients1: "",
        ingredients2: "",
        ingredients3: "",
        ingredients4: "",
        ingredients5: "",
        ingredients6: "",
        ingredients7: "",
        ingredients8: "",
        ingredients9: "",
        ingredients10: "",
        step1: "",
        step2: "",
        step3: "",
        step4: "",
        step5: "",
        step6: "",
        step7: "",
        step8: "",
        step9: "",
        step10: "",
        note1: "",
        note2: "",
        note3: "",
        note4: "",
        note5: "",
        url2: ""
    });
  }
  
    return (
        <div className='form-page'>
            <h1 className='form-heading'>Рецепта</h1>
            <form className='form' onSubmit={handleSubmit}>
                <div className='fields-container'>
                    <div className='left-form'>
    
                        <input className='input'
                            type="text" 
                            id="title" 
                            name="title" 
                            placeholder="Заглавие"
                            value={formData.title} 
                            onChange={handleChange}
                        />
    
                        <textarea className='input textarea'
                            id="introduction" 
                            name="introduction" 
                            placeholder="Увод"
                            rows="3"
                            value={formData.introduction} 
                            onChange={handleChange}
                            />

                        <input className='input'
                            type="text" 
                            id="url" 
                            name="url" 
                            placeholder="Снимка 1"
                            value={formData.url} 
                            onChange={handleChange}
                        />

                        <input className='input'
                            type="text" 
                            id="url2" 
                            name="url2" 
                            placeholder="Снимка 2"
                            value={formData.url2} 
                            onChange={handleChange}
                        />

                        <div className='form-ingredients'>
                            <input className='input'
                                type="text" 
                                id="ingredients1" 
                                name="ingredients1" 
                                placeholder="Продукт"
                                value={formData.ingredients1} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="ingredients2" 
                                name="ingredients2" 
                                placeholder="Продукт"
                                value={formData.ingredients2} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="ingredients3" 
                                name="ingredients3" 
                                placeholder="Продукт"
                                value={formData.ingredients3} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="ingredients4" 
                                name="ingredients4"
                                placeholder="Продукт" 
                                value={formData.ingredients4} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="ingredients5" 
                                name="ingredients5" 
                                placeholder="Продукт"
                                value={formData.ingredients5} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="ingredients6" 
                                name="ingredients6" 
                                placeholder="Продукт"
                                value={formData.ingredients6} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="ingredients7" 
                                name="ingredients7" 
                                placeholder="Продукт"
                                value={formData.ingredients7} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="ingredients8" 
                                name="ingredients8" 
                                placeholder="Продукт"
                                value={formData.ingredients8} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="ingredients9" 
                                name="ingredients9" 
                                placeholder="Продукт"
                                value={formData.ingredients9} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="ingredients10" 
                                name="ingredients10" 
                                placeholder="Продукт"
                                value={formData.ingredients10} 
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className='right-form'>
                        <div className='form-steps'>
                            <input className='input'
                                type="text" 
                                id="step1" 
                                name="step1" 
                                placeholder="Стъпка"
                                value={formData.step1} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="step2" 
                                name="step2" 
                                placeholder="Стъпка"
                                value={formData.step2} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="step3" 
                                name="step3" 
                                placeholder="Стъпка"
                                value={formData.step3} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="step4" 
                                name="step4" 
                                placeholder="Стъпка"
                                value={formData.step4} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="step5" 
                                name="step5" 
                                placeholder="Стъпка"
                                value={formData.step5} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="step6" 
                                name="step6" 
                                placeholder="Стъпка"
                                value={formData.step6} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="step7" 
                                name="step7" 
                                placeholder="Стъпка"
                                value={formData.step7} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="step8" 
                                name="step8" 
                                placeholder="Стъпка"
                                value={formData.step8} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="step9" 
                                name="step9" 
                                placeholder="Стъпка"
                                value={formData.step9} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="step10" 
                                name="step10" 
                                placeholder="Стъпка"
                                value={formData.step10} 
                                onChange={handleChange}
                            />
                        </div>

                        <div className='form-notes'>
                            <input className='input'
                                type="text" 
                                id="note1" 
                                name="note1" 
                                placeholder="Бележка"
                                value={formData.note1} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="note2" 
                                name="note2" 
                                placeholder="Бележка"
                                value={formData.note2} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="note3" 
                                name="note3" 
                                placeholder="Бележка"
                                value={formData.note3} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="note4" 
                                name="note4" 
                                placeholder="Бележка"
                                value={formData.note4} 
                                onChange={handleChange}
                            />

                            <input className='input'
                                type="text" 
                                id="note5" 
                                name="note5" 
                                placeholder="Бележка"
                                value={formData.note5} 
                                onChange={handleChange}
                            />
                        </div>

                    </div>
                </div>
                <div className='button-container'>
                    <button className='form-button' type="submit">Submit</button>
                    <button className='form-button' onClick={reset}>Reset</button>
                </div>
            </form>
        </div>
    )
}

export default RecipeForm;