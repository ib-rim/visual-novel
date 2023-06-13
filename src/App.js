import './reset.css';
import Character from './Character';

import Dialogue from './components/Dialogue/Dialogue';
import Scene from './components/Scene/Scene';

import scene1bg from './assets/img/drydock.png';

import grayfaceHappy from './assets/img/grayface-happy.png';
import grayfaceSad from './assets/img/grayface-sad.png';
import grayfaceNeutral from './assets/img/grayface-neutral.png';

function App() {

    const grayface = new Character("Gray Face", grayfaceHappy, grayfaceSad, grayfaceNeutral);

    const startPuzzle = () => {
        alert("Puzzle started");
    }

    const scene1Events = [
        <Dialogue character={grayface} mood={"neutral"}>
            First, I'm neutral.
        </Dialogue>,
        <Dialogue character={grayface} mood={"happy"}>
            Secondly, I'm happy.
        </Dialogue>,
        <Dialogue character={grayface} mood={"sad"}>
            Thirdly, I'm sad.
        </Dialogue>,
        startPuzzle,
    ];

    return (
        <div className="App">
            <Scene dialogue={scene1Events} background={scene1bg}/>
        </div>
    );
}

export default App;
