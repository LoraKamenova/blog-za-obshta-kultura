import { React, useState } from 'react';
import data from '../../assets/data.json';
import './Forms.css';

const RecipeForm = (props) => { 

    let count = data.length;

    const [text, setText]=useState("");
    const [text2, setText2]=useState("");
    const [selectedOption, setSelectedOption] = useState("Салати");

    const [formData, setFormData] = useState({
        title: "",
        introduction: "",
        url: "",
        url2: "", 
        ingredients: "",
        steps: "",
        notes: "",
        tags: ""
    });

    const  handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        var jsonObject = {};
        var jsonObjectShort = {};

        let ingredients = formData.ingredients.split('\n').map(s => s.trim());
        ingredients = ingredients.filter(item => item);

        let steps = formData.steps.split('\n').map(s => s.trim());
        steps = steps.filter(item => item);

        let notes = formData.notes.split('\n').map(s => s.trim());
        notes = notes.filter(item => item);

        jsonObject.title = formData.title;
        jsonObject.introduction = formData.introduction;
        jsonObject.url = formData.url;
        jsonObject.ingredients = ingredients;
        jsonObject.steps = steps;
        jsonObject.notes = notes;
        jsonObject.url2 = formData.url2;

        let tags = formData.tags.split(",").map(s => s.trim());
        tags = tags.filter(item => item);

        const current = new Date();
        const day = ("0" + current.getDate()).slice(-2);
        const month = ("0" + (current.getMonth() + 1)).slice(-2);
        const year = current.getFullYear();
        const date = `${day}/${month}/${year}`;

        jsonObjectShort._id = count + 1;
        jsonObjectShort.title = formData.title;
        jsonObjectShort.date = date;
        jsonObjectShort.category = "Рецепти";
        jsonObjectShort.subcategory = selectedOption;
        jsonObjectShort.tags = tags;
        jsonObjectShort.url = formData.url;
        jsonObjectShort.content = formData.introduction;

        // alert(`${JSON.stringify(jsonObject, null, 4)}`);
        setText(`${JSON.stringify(jsonObject, null, 4)}`);
        setText2(`${JSON.stringify(jsonObjectShort, null, 4)}`);
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
            url2: "",
            tags: ""
        });

        setText("");
        setText2("");
    };
  
    return (
        <div className='form-page'>
            <form className='form' onSubmit={handleSubmit}>
                
                <div className='fields-container'>
                    <div className='form-half'>
                    <h1 className='form-heading'>Нова рецепта</h1>
                        <div className='input select'>
                            <label className='select-label'>Подкатегория</label>
                            <select className='select-option' value={selectedOption} onChange={handleDropdownChange}>
                                <option  value="Салати">Салати</option>
                                <option  value="Предястия">Предястия</option>
                                <option  value="Основни">Основни</option>
                                <option  value="Тестени">Тестени</option>
                                <option  value="Десерти">Десерти</option>
                                <option  value="Напитки">Напитки</option>
                            </select> 
                        </div>

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
                            rows="3"
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

                        {/* <label>Необходими продукти</label> */}
                            <textarea className='input textarea'
                            id="ingredients" 
                            name="ingredients" 
                            placeholder="Необходими продукти"
                            rows="10"
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
                            rows="11"
                            placeholder="Стъпки"
                            value={formData.steps} 
                            onChange={handleChange}
                        />

                        {/* <label>Бележки</label> */}
                        <textarea className='input textarea'
                            type="text" 
                            id="notes" 
                            name="notes" 
                            rows="6"
                            placeholder="Бележки"
                            value={formData.notes} 
                            onChange={handleChange}
                        />

                            {/* <label>Тагове</label>
                            <textarea className='input textarea'
                            type="text" 
                            id="tags" 
                            name="tags" 
                            rows="1"
                            placeholder="Етикети"
                            value={formData.tags} 
                            onChange={handleChange}
                        /> */}

                        {/* <label>Тагове 2</label> */}
                        <input className='input'
                            type="text" 
                            id="tags" 
                            name="tags" 
                            placeholder="Етикети"
                            value={formData.tags} 
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

                    </div>
                </div>
   
                <div className='button-container'>
                    <button className='form-button' onClick={reset}>Reset</button>
                    <button className='form-button' type="submit">Submit</button>
                </div>
            </form>
            <section className='result-section'>
                {/* <h1 className='result-heading'>JSON</h1> */}
                <pre className='result-text first'>{text}</pre>
                <pre className='result-text second'>{text2}</pre>
            </section>
        </div>
    )
}

export default RecipeForm;