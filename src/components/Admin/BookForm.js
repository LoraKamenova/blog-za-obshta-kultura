import { React, useState } from 'react';
import data from '../../assets/data.json';
import './Forms.css';

const BookForm = (props) => { 

    let count = data.length;

    const [text, setText]=useState("");
    const [text2, setText2]=useState("");
    const [selectedOption, setSelectedOption] = useState("Художествени");

    const [formData, setFormData] = useState({
        title: "",
        introduction: "",
        url: "",
        name: "", 
        author: "",
        genre: "",
        year: "",
        edition: "",
        publisher: "",
        covers: "",
        pages: "",
        annotation: "",
        content: "",
        mark: ""
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

        let content = formData.content.split('\n').map(s => s.trim());
        content = content.filter(item => item);

        jsonObject.title = formData.title;
        jsonObject.introduction = formData.introduction;
        jsonObject.url = formData.url;
        jsonObject.name = formData.name;
        jsonObject.author = formData.author;
        jsonObject.genre = formData.genre;
        jsonObject.year = formData.year;
        jsonObject.edition = formData.edition;
        jsonObject.publisher = formData.publisher;
        jsonObject.covers = formData.covers;
        jsonObject.pages = formData.pages;
        jsonObject.annotation = formData.annotation;
        jsonObject.content = content;
        jsonObject.mark = formData.mark;

        let tags = formData.tags.split(",").map(s => s.trim());
        tags = tags.filter(item => item);

        const current = new Date();
        const day = ("0" + current.getDate()).slice(-2);
        const month = ("0" + (current.getMonth() + 1)).slice(-2);
        const fullYear = current.getFullYear();
        const date = `${day}/${month}/${fullYear}`;

        jsonObjectShort._id = count + 1;
        jsonObjectShort.title = formData.title;
        jsonObjectShort.date = date;
        jsonObjectShort.category = "Книги";
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
            name: "", 
            author: "",
            genre: "",
            year: "",
            edition: "",
            publisher: "",
            covers: "",
            pages: "",
            annotation: "",
            content: "",
            mark: ""
        });

        setText("");
        setText2("");
    };
  
    return (
        <div className='form-page'>
            <form className='form' onSubmit={handleSubmit}>
                
                <div className='fields-container'>
                    <div className='form-half'>
                    <h1 className='form-heading'>Нова книга</h1>
                        <div className='input select'>
                            <label className='select-label'>Подкатегория</label>
                            <select className='select-option' value={selectedOption} onChange={handleDropdownChange}>
                                <option  value="Художествени">Художествени</option>
                                <option  value="Нехудожествени">Нехудожествени</option>
                                <option  value="Икономика">Икономически</option>
                                <option  value="Биографии">Биографии</option>
                                <option  value="Пътуване">Пътуване</option>
                                <option  value="София">София</option>
                                <option  value="Колекции">Колекции</option>
                                <option  value="Списания">Списания</option>
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
                            rows="3"
                            value={formData.introduction} 
                            onChange={handleChange}
                        />
                
                        <input className='input'
                            type="text" 
                            id="url" 
                            name="url" 
                            placeholder="Снимка"
                            value={formData.url} 
                            onChange={handleChange}
                        />

                        <input className='input'
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Име"
                            value={formData.name} 
                            onChange={handleChange}
                        />

                        <input className='input'
                            type="text" 
                            id="author" 
                            name="author" 
                            placeholder="Автор"
                            value={formData.author}
                            onChange={handleChange}
                        /> 
                        <input className='input'
                            type="text" 
                            id="genre" 
                            name="genre" 
                            placeholder="Жанр"
                            value={formData.genre}
                            onChange={handleChange}
                        /> 
                        <input className='input'
                            type="text" 
                            id="year" 
                            name="year" 
                            placeholder="Година"
                            value={formData.year}
                            onChange={handleChange}
                        />
                        <input className='input'
                            type="text" 
                            id="edition" 
                            name="edition" 
                            placeholder="Издание"
                            value={formData.edition}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='form-half'>
                        <input className='input'
                            type="text" 
                            id="publisher" 
                            name="publisher" 
                            placeholder="Издателство"
                            value={formData.publisher}
                            onChange={handleChange}
                        />  
                        <input className='input'
                            type="text" 
                            id="covers" 
                            name="covers" 
                            placeholder="Корици"
                            value={formData.covers}
                            onChange={handleChange}
                        /> 
                        <input className='input'
                            type="number" 
                            id="pages" 
                            name="pages" 
                            placeholder="Страници"
                            value={formData.pages}
                            onChange={handleChange}
                        /> 
                        <textarea className='input textarea'
                            id="annotation" 
                            name="annotation" 
                            placeholder="Анотация"
                            rows="5"
                            value={formData.annotation} 
                            onChange={handleChange}
                        />
                        <textarea className='input textarea'
                            id="content" 
                            name="content" 
                            placeholder="Анализ"
                            rows="8"
                            value={formData.content} 
                            onChange={handleChange}
                        />
                        <input className='input'
                            type="number" 
                            id="mark" 
                            name="mark" 
                            placeholder="Оценка"
                            value={formData.mark}
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

export default BookForm;