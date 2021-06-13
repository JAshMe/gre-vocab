/* Created By: JAshMe */
/*
    Description: To show list of words with a given heading and also have functionality to show popovers when clicked
*/

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import "./WordList.scss"
import {WordItem, WordItemProps} from "./WordItem/WordItem";
import React, {useState} from "react";


export interface WordListItem
{
    wordItem: WordItemProps;
    value?: string;
    disabled?: boolean;
    onHover?: (item: WordListItem, key: number) => void;
    onClick?: (item: WordListItem, key: number) => void;

}

export interface WordListProps
{
    listHeader?: string | JSX.Element | JSX.Element[];
    listItems: WordListItem[];
    headerClassName?: string;

}

export const WordList = ({
    listHeader = '',
    headerClassName = '',
    ...props
} : WordListProps) => {

    // Index of clicked item to decide what popover to show
    const [clickedItem, setClickedItem] = useState<number>(-1);

    //Setting Defaults to every list item
    const listItems : WordListItem[] = props.listItems.map((listItem) => ({disabled: false, highlightColor: '', ...listItem}));

    //Event Handlers
    const handlePopoverClose = () : void => {
        console.log("handling popover close ", clickedItem);
        setClickedItem(-1);
    };

    return (


        <div className="card WordList-wrapper">
                {listHeader && <div className={`card-header ${headerClassName}`}>{listHeader}</div>}
                {listItems.length > 0 &&
                <PerfectScrollbar component="ul">
                <ul className="list-group list-group-flush WordList-list">
                        {
                            listItems.map(
                                (item, key) =>
                                    <li className={`list-group-item ${item.disabled} WordList-listItem`}
                                        key={key}
                                        onMouseOver={() => {
                                            item.onHover && item.onHover(item, key)
                                        }}
                                        onClick={() => {
                                            setClickedItem(key);
                                            item.onClick && item.onClick(item, key)
                                        }}
                                    >
                                        <WordItem {...item.wordItem} key={key}
                                                  showPopover={key === clickedItem}
                                                  onPopoverClose={handlePopoverClose} //To reset the popovers
                                        />
                                    </li>
                            )
                        }
                </ul>
                </PerfectScrollbar>
                }
            </div>
    )
}