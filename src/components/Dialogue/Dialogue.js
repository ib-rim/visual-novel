import { useEffect, useState } from 'react';
import './Dialogue.css';

function Dialogue(props) {

    const [currentSpeech, setCurrentSpeech] = useState('');

    useEffect(() => {
        let fullSpeech = props.children;
        let currentText = '';
        for (let i = 0; i < fullSpeech.length; i++) {
            setTimeout(() => {
                let letter = fullSpeech[i];
                currentText += letter;
                setCurrentSpeech(currentText);
            }, 50 * i);
        }
    }, [])

    return (
        <div className="dialogue-box">
            <span className="character-name">{props.character.name}</span>
            <img src={props.character.portraits[props.mood]} alt="" className="character-portrait" />
            {
                props.typewriter ?
                    <p aria-hidden="true" className="speech">{currentSpeech}</p>
                    : <></>
            }
            <p className={`${props.typewriter ? 'sr-only' : ''}`}>{props.children}</p>
        </div>
    );
}

export default Dialogue;