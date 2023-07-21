import './Dialogue.css';

function Dialogue(props) {

    return (
        <div className="dialogue-box">
            <span className="character-name">{props.character.name}</span>
            <img src={props.character.portraits[props.mood]} alt="" className="character-portrait" />
            <p aria-hidden="true" className="speech">{props.children}</p>
            <p className="sr-only">{props.children}</p>
        </div>
    );
}

export default Dialogue;