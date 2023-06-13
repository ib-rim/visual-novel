import './Scene.css';
import { useEffect, useState } from "react";

function Scene(props) {

    const [currentDialogue, setCurrentDialogue] = useState();

    const [eventNumber, setEventNumber] = useState(0);

    useEffect(() => {
        handleEvent(props.dialogue[eventNumber]);
    }, []);

    useEffect(() => {
        handleEvent(props.dialogue[eventNumber]);
    }, [eventNumber]);

    const handleClick = () => {
        let newEventNumber = eventNumber + 1;
        if (newEventNumber < props.dialogue.length) {
            setEventNumber(newEventNumber);
        }
    }

    const handleEvent = (event) => {
        if (typeof (event) === 'function') {
            event();
        }
        else if (event.type.name === 'Dialogue') {
            setCurrentDialogue(event);
        }
    }

    return (
        <div className="scene" onClick={() => handleClick()} style={{ backgroundImage: `url(${props.background})` }}>
            {currentDialogue}
        </div>
    );
}

export default Scene;