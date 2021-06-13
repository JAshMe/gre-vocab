/* Created By: JAshMe */
/*
    Description: The main app that can be mounted or unmounted to reset the words.
*/

import React, {useEffect, useState} from "react";
import {randomNumber} from "../../utils/MathUtils";
import {ResetApp} from "./ResetApp/ResetApp";
import {WordDisplay} from "./WordDisplay/WordDisplay";
import {WordList} from "./WordList/WordList";

export interface GREVocabAppProps
{
    wordList: GREWord[];
    resetApp: () => void;
}

export interface GREWord
{
    word: string;
    meaning: string;
    desc: string;
    sentence: string;
}

export const initWord: GREWord = {
    word: '',
    meaning: '',
    desc: '',
    sentence: ''
}


export const GREVocabApp = ({wordList, resetApp, ...props}: GREVocabAppProps) => {
    const [remainingWords, setRemainingWords] = useState<GREWord[]>(wordList); //Will consider the displayWord as well
    const [masteredWords, setMasteredWords] = useState<GREWord[]>([]);
    const [learningWords, setLearningWords] = useState<GREWord[]>([]);
    const [currentWord, setCurrentWord] = useState<GREWord>(initWord);



    /******Methods to handle user actions******/

    // To update the current word whenever remaining words are changed
    useEffect(() => {
        const getRandomWord = () : GREWord => remainingWords[randomNumber(0,remainingWords.length)];

        setCurrentWord(getRandomWord());
    }, [remainingWords])



    //Will save to mastered list and then get a new random word
    const updateMasteredWords = (masteredWord: GREWord) =>
    {
        //Add to masteredWords
        setMasteredWords(prevState => prevState.concat(masteredWord));

        //Remove from remainingWords and get a new random word after state is updated
        setRemainingWords(prevState => prevState.filter((word) => word !== masteredWord));
    }

    //Will save to learning list and then get a new random word
    const updateLearningWords = (learningWord: GREWord) =>
    {
        //Add to learningWords
        setLearningWords(prevState => prevState.concat(learningWord));

        //Remove from remainingWords
        setRemainingWords(prevState => prevState.filter((word) => word !== learningWord));
    }

    return (
        <>
            <div className="jumbotron p-5 mb-0">
                {
                    remainingWords.length === 0 ?
                      <ResetApp resetApp={resetApp} />
                    : <WordDisplay
                        word={currentWord}
                        updateMasteredWords={updateMasteredWords}
                        updateLearningWords={updateLearningWords}
                    />
                }
            </div>

            {/*Progress Bar*/}
            <div className="progress mb-4">
                <div className="progress-bar" role="progressbar"
                     aria-valuenow={wordList.length - remainingWords.length}
                     aria-valuemin={0}
                     aria-valuemax={wordList.length}
                     style={{width: `${(wordList.length - remainingWords.length)*100/wordList.length}%`}}
                />
            </div>

            {/*Word Lists*/}
            <div className="d-flex flex-column flex-md-row">
                {/*Mastered Word List*/}
                <div className="col-12 col-md-6">
                    <WordList
                        listHeader={
                            <div className="d-flex justify-content-between align-items-baseline">
                                <span>Mastered</span>
                                <span className="badge badge-light badge-pill">{masteredWords.length}</span>
                            </div>
                        }
                        headerClassName={'bg-success text-white'}
                        listItems={
                            masteredWords.map((masteredWord, key) => ({
                                    wordItem: {
                                        word: masteredWord.word,
                                        meaning: masteredWord.meaning,
                                        sentence: masteredWord.sentence,
                                        desc: masteredWord.desc,
                                        popoverPlacement: "right",
                                        index: key
                                    },
                                    value: masteredWord.word
                                })
                            )
                        }
                    />
                </div>
                {/*Learning Word List*/}
                <div className="col-12 col-md-6">
                    <WordList
                        listHeader={
                            <div className="d-flex justify-content-between align-items-baseline">
                                <span>Learning</span>
                                <span className="badge badge-light badge-pill">{learningWords.length}</span>
                            </div>
                        }
                        headerClassName={'bg-danger text-white'}
                        listItems={
                            learningWords.map((learningWord, key) => ({
                                    wordItem: {
                                        word: learningWord.word,
                                        meaning: learningWord.meaning,
                                        sentence: learningWord.sentence,
                                        desc: learningWord.desc,
                                        popoverPlacement: 'left',
                                        index: key},
                                    value: learningWord.word
                                })
                            )
                        }
                    />
                </div>
            </div>
        </>
    );

}