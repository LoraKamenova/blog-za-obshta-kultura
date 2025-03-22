import { React, useState } from 'react';
import data from '../../assets/data.json';
import './Forms.css';

const RecipeForm = (props) => { 

    let count = data.length;

    const [text, setText]=useState("");
    const [text2, setText2]=useState("");
    const [selectedOption, setSelectedOption] = useState("Архитектурни разкази");

    const [formData, setFormData] = useState({
        title: "",
        introduction: "",
        url1: "",
        caption1: "",
        content1: "",
        url2: "",
        caption2: "",
        content2: "",
        url3: "",
        caption3: "",
        content3: "",
        link: "",
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

        let sections = [];

        let content1 = formData.content1.split('\n').map(s => s.trim());
        content1 = content1.filter(item => item);

        var obj1 = {"url" : formData.url1, "caption": formData.caption1, "content": content1};

        sections.push(obj1);

        if (formData.url2 !== "") {
            let content2 = formData.content2.split('\n').map(s => s.trim());
            content2 = content2.filter(item => item);

            var obj2 = {"url" : formData.url2, "caption": formData.caption2, "content": content2};

            sections.push(obj2);
        }

        if (formData.url3 !== "") {
            let content3 = formData.content3.split('\n').map(s => s.trim());
            content3 = content3.filter(item => item);

            var obj3 = {"url" : formData.url3, "caption": formData.caption3, "content": content3};

            sections.push(obj3);
        }

        let link = "";

        if (formData.link !== "") {
            link = formData.link.split('\n').map(s => s.trim());
        }

        jsonObject.title = formData.title;
        jsonObject.introduction = formData.introduction;
        jsonObject.sections = sections;
        jsonObject.link = link;

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
        jsonObjectShort.category = "Статия";
        jsonObjectShort.subcategory = selectedOption;
        jsonObjectShort.tags = tags;
        jsonObjectShort.url = formData.url1;
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
            url1: "",
            caption1: "",
            content1: "",
            url2: "",
            caption2: "",
            content2: "",
            url3: "",
            caption3: "",
            content3: "",
            link: "",
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
                    <h1 className='form-heading'>Нова статия</h1>
                        <div className='input select'>
                            <label className='select-label'>Подкатегория</label>
                            <select className='select-article-option' value={selectedOption} onChange={handleDropdownChange}>
                                <option  value="Архитектурни разкази">Архитектурни разкази</option>
                                <option  value="Места по света">Места по света</option>
                                <option  value="В градината">В градината</option>
                                <option  value="Как се прави">Как се прави</option>
                                <option  value="Правилата на играта">Правилата на играта</option>
                                <option  value="Историята на">Историята на</option>
                                <option  value="Бизнес истории">Бизнес истории</option>
                                <option  value="Кулинарни разкази">Кулинарни разкази</option>
                                <option  value="Други статии">Други статии</option>
                            </select> 
                        </div>

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
                            placeholder="Представяне"
                            rows="2"
                            value={formData.introduction} 
                            onChange={handleChange}
                        />
                        
                        <textarea className='input textarea'
                            id="link" 
                            name="link" 
                            placeholder="Линк"
                            rows="2"
                            value={formData.link} 
                            onChange={handleChange}
                        />
                
                        <input className='input'
                            type="text" 
                            id="url1" 
                            name="url1" 
                            placeholder="Снимка 1"
                            value={formData.url1} 
                            onChange={handleChange}
                        />

                        <input className='input'
                            type="text" 
                            id="caption1" 
                            name="caption1" 
                            placeholder="Надпис 1"
                            value={formData.caption1} 
                            onChange={handleChange}
                        />

                        <textarea className='input textarea'
                            id="content1" 
                            name="content1" 
                            placeholder="Съдържание 1"
                            rows="5"
                            value={formData.content1} 
                            onChange={handleChange}
                        />
                    </div>

                    <div className='form-half'>
                        <input className='input'
                            type="text" 
                            id="url2" 
                            name="url2" 
                            placeholder="Снимка 2"
                            value={formData.url2} 
                            onChange={handleChange}
                        />

                        <input className='input'
                            type="text" 
                            id="caption2" 
                            name="caption2" 
                            placeholder="Надпис 2"
                            value={formData.caption2} 
                            onChange={handleChange}
                        />

                        <textarea className='input textarea'
                            id="content2" 
                            name="content2" 
                            placeholder="Съдържание 2"
                            rows="5"
                            value={formData.content2} 
                            onChange={handleChange}
                        />

                        <input className='input'
                            type="text" 
                            id="url3" 
                            name="url3" 
                            placeholder="Снимка 3"
                            value={formData.url3} 
                            onChange={handleChange}
                        />

                        <input className='input'
                            type="text" 
                            id="caption3" 
                            name="caption3" 
                            placeholder="Надпис 3"
                            value={formData.caption3} 
                            onChange={handleChange}
                        />

                        <textarea className='input textarea'
                            id="content3" 
                            name="content3" 
                            placeholder="Съдържание 3"
                            rows="5"
                            value={formData.content3} 
                            onChange={handleChange}
                        />

                        <input className='input'
                            type="text" 
                            id="tags" 
                            name="tags" 
                            placeholder="Етикети"
                            value={formData.tags} 
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
                <pre className='result-text first'>{text}</pre>
                <pre className='result-text second'>{text2}</pre>
            </section>
        </div>
    )
}

export default RecipeForm;