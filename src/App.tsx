import React, {useState} from 'react';
import './App.scss';
import {HeaderNav} from "./components/HeaderNav/HeaderNav";
import {GREVocabApp, GREWord} from "./components/GREVocabApp/GREVocabApp";

const wordList: GREWord[] = require("./data/corpus3.json");

function App() {

    const [key, setKey] = useState<number>(0);

    return (
        <div className="App">
            <header className="App-header">
                <HeaderNav brandLabel={'GRE Vocab Practice'}/>
            </header>
            <div className="App-body">
                <GREVocabApp
                    wordList={wordList}
                    key={key}
                    resetApp={() => setKey(prevState => prevState+1)}
                />
            </div>
        </div>
    )
}

export default App;
