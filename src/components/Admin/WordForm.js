import { React, useState } from 'react';
import data from '../../assets/data_words.json';
import './Forms.css';

const CraftForm = (props) => { 

    let count = data.length;

    const [text2, setText2]=useState("");

    const [formData, setFormData] = useState({
        word: "",
        description: "",
        comment: ""
    });

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        var jsonObjectShort = {};

        jsonObjectShort._id = count + 1;
        jsonObjectShort.word = formData.word;
        jsonObjectShort.description = formData.description;
        jsonObjectShort.comment = formData.comment;

        setText2(`${JSON.stringify(jsonObjectShort, null, 4)}`);
    };

    function reset(event) {
        event.preventDefault();
        setFormData({ 
            word: "",
            description: "",
            comment: ""
        });

        setText2("");
    };
  
    return (
        <div className='word-form-page'>
            <form className='word-form' onSubmit={handleSubmit}>
                <h1 className='form-heading'>Нова дума</h1>

                    <input className='input'
                        type="text" 
                        id="word" 
                        name="word" 
                        placeholder="Дума"
                        value={formData.word} 
                        onChange={handleChange}
                    />

                    <textarea className='input textarea'
                        id="comment" 
                        name="comment" 
                        placeholder="Коментар"
                        rows="3"
                        value={formData.comment} 
                        onChange={handleChange}
                    />
            
                    <textarea className='input textarea'
                        id="description" 
                        name="description" 
                        placeholder="Описание"
                        rows="10"
                        value={formData.description} 
                        onChange={handleChange}
                    />

                <div className='button-container'>
                    <button className='form-button' onClick={reset}>Reset</button>
                    <button className='form-button' type="submit">Submit</button>
                </div>
            </form>
            <section className='word-result-section'>
                <pre className='result-text second'>{text2}</pre>
            </section>
        </div>
    )
}

export default CraftForm;