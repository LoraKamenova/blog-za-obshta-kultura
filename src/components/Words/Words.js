import { React, Component } from 'react';
import data from '../../assets/data_words.json';
import WordCard from '../Words/WordCard';
import './Words.css'

class Words extends Component {

    render() {

        let reversedData = data.reverse();
        let words = reversedData.map(({_id, word, description, comment}) => ({_id, word, description, comment}));
    
        return (
            <section className="words-page">
                <div className="words-section">
                    <h1 className='words-heading'>Дума на деня</h1>
                    <div className='words-container'>
                        {words.map((x) => (
                            <WordCard word={x.word}
                            description={x.description}
                            comment={x.comment}
                            />
                            )
                        )}
                    </div>
                </div>
            </section>
        )
    }
}
export default Words;