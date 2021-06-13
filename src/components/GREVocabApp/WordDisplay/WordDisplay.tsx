/* Created By: JAshMe */
/*
    Description: To display a given word
*/

import {GREWord} from "../GREVocabApp";
import {useState} from "react";
import {Collapse} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from "@fortawesome/free-solid-svg-icons/faChevronDown";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons/faInfoCircle";

import "./WordDisplay.scss"


export interface WordDisplayProps
{
    word: GREWord;
    updateMasteredWords: (masteredWord: GREWord) => void;
    updateLearningWords: (learningWord: GREWord) => void;
}

export const WordDisplay = (props: WordDisplayProps) => {
    const {word} = props;

    const [showMeaning, setShowMeaning] = useState<boolean>(false);
    const [timeout, setTimeout] = useState<number>(300);


    const onMeaningToggle = () : void => {



        setShowMeaning(!showMeaning);
        setTimeout(300);
    }

    const onMasterClick = () : void => {
        setTimeout(0);
        setShowMeaning(false);
        props.updateMasteredWords(word)
    }

    const onLearningClick = () : void => {
        setTimeout(0);
        setShowMeaning(false);
        props.updateLearningWords(word);
    }

    return (
        <div className="d-flex flex-column">
            <div className="d-flex">
                {/*Main word */}
                <h1 className="display-4 col-8 d-flex align-content-center">
                    <span>{word.word}</span>
                    <button className="btn WordDisplay-toggleBtn"
                        onClick={onMeaningToggle}
                        aria-controls="WordDisplay-meaning"
                        aria-expanded={showMeaning}
                    >
                        <FontAwesomeIcon icon={faChevronDown}
                                         className={showMeaning ? "arrow-up" : "arrow-down"}
                        />
                    </button>
                </h1>
                {/*Action Buttons Flex Box*/}
                <div className="btn-group col-4">
                    <button className="btn btn-success col-6" onClick={() => onMasterClick()}>
                        <h3 className="font-weight-light mb-0"> Mastered!</h3>
                    </button>
                    <button className="btn btn-danger col-6" onClick={() => onLearningClick()}>
                        <h3 className="font-weight-light mb-0"> Not Mastered</h3>
                    </button>
                </div>
            </div>
            <Collapse in={showMeaning} timeout={timeout}>
                <div id="WordDisplay-meaning">
                    <div className={"lead col-12"}>
                        {word.desc}
                    </div>
                    <p className="col-12 mt-2 font-weight-bold">
                        Meaning: {word.meaning}&nbsp;
                        <a href={`https://www.vocabulary.com/dictionary/${word.word}`}
                            target={'_blank'}
                           rel={'noreferrer'}
                           className="text-dark"
                        >
                            <FontAwesomeIcon icon={faInfoCircle}/>
                        </a>
                    </p>
                    <hr/>
                    <p>Example: {word.sentence}</p>
                </div>
            </Collapse>
        </div>

    )
}