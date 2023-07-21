import './App.css';
import './reset.css';
import { useEffect, useState } from "react";

import Character from './Character';

import Dialogue from './components/Dialogue/Dialogue';

import scene1bg from './assets/img/drydock.png';

import grayfaceHappy from './assets/img/grayface-happy.png';
import grayfaceSad from './assets/img/grayface-sad.png';
import grayfaceNeutral from './assets/img/grayface-neutral.png';

function App() {

    const [showDialogue, setShowDialogue] = useState(false);

    const [background, setBackground] = useState(scene1bg);

    const grayface = new Character("Gray Face", grayfaceHappy, grayfaceSad, grayfaceNeutral);

    const startPuzzle = () => {
        alert("Puzzle started");
    }

    const [eventNumber, setEventNumber] = useState(0);

    const events = [
        <Dialogue character={grayface} mood={"neutral"}>
            {`
            Speech one sentence
            Speech one sentence
            Speech one sentence
            Speech one sentence
            Speech one sentence
            Speech one sentence
            Speech one sentence
            `}
        </Dialogue>,
        <Dialogue character={grayface} mood={"happy"}>
            {`
            Speech two sentence
            Speech two sentence
            Speech two sentence
            `}
        </Dialogue>,
        <Dialogue character={grayface} mood={"happy"}>
            {`
            Speech three sentence
            Speech three sentence
            Speech three sentence
        `}
        </Dialogue>,
        startPuzzle,
    ];

    useEffect(() => {
        handleEvent(events[eventNumber]);
    }, [eventNumber]);

    const handleClick = () => {
        let newEventNumber = eventNumber + 1;
        if (newEventNumber < events.length) {
            setEventNumber(newEventNumber);
        }
    }

    const handleEvent = (event) => {
        if (typeof (event) === 'function') {
            setShowDialogue(false);
            event();
        }
        else {
            setShowDialogue(true);
        }
    }

    return (
        <div className="App">
            <div className="scene" onClick={() => handleClick()} style={{ backgroundImage: `url(${background})` }}>
                {
                    showDialogue ?
                        events[eventNumber]
                        :
                        <></>
                }
            </div>
        </div>
    );
}

export default App;
