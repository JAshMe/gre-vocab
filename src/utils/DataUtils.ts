/* Created By: JAshMe */
/*
    Description: Utility Methods for reading data
*/


import {GREWord} from "../components/GREVocabApp/GREVocabApp";
import readXlsxFile from 'read-excel-file/node'

export const getWordsFromExcel =  async (file: string): Promise<GREWord[]> => {

    const schema = {
        'WORD': {
            prop: 'word',
            type: String
        },
        'MEANING': {
            prop: 'meaning',
            type: String
        },
        'SENTENCE': {
            prop: 'sentence',
            type: String
        }
    }

    const rows = await readXlsxFile(file);

    console.log(rows);

    return []

}