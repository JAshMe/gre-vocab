/* Created By: JAshMe */
/*
    Description: This will represent a WordItem in a list with its meaning and sentence in popover
*/

import {OverlayTrigger, Popover} from "react-bootstrap";
import "./WordItem.scss";
import {Placement} from "react-bootstrap/Overlay";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons/faInfoCircle";
import {SyntheticEvent} from "react";
import {faTimesCircle} from "@fortawesome/free-regular-svg-icons/faTimesCircle";

export interface WordItemProps
{
    word: string;
    meaning?: string;
    sentence?: string;
    desc?: string;
    index: number;
    popoverPlacement?: Placement;
    showPopover?: boolean;
    onPopoverClose?: () => void;
}

export const WordItem = ({
    meaning = 'No Meaning Available',
    sentence = 'No Sentence Available',
    desc = 'No description available',
    popoverPlacement = 'right',
    showPopover = false,
    ...props
 }: WordItemProps) => {

    // const [closedPopover, setClosedPopover] = useState<boolean>(false);
    //
    // //Whenever showPopover value is changed, reset the state for closed icon
    // useEffect(() => {
    //     setClosedPopover(false);
    // }, [showPopover])


    const handlePopoverClose = (event: SyntheticEvent) => {
        event.stopPropagation(); //So that parent click handlers are not executed
        showPopover && props.onPopoverClose && props.onPopoverClose();
    }

    //Popover JSX
    const popOver = (
      <Popover id={`WordItem-item-${props.index}`}>
        <Popover.Title as={"h3"}>
            <div className="d-flex justify-content-between">
                <div>{meaning}</div>
                <div className="font-weight-light flex-shrink-0 pl-1">
                    <a href={`https://www.vocabulary.com/dictionary/${props.word}`}
                       target={'_blank'}
                       rel={'noreferrer'}
                       className="text-dark">
                        <FontAwesomeIcon icon={faInfoCircle}/>
                    </a>
                    <span className="ml-1 text-danger"
                          style={{cursor: 'pointer'}}
                          onClick={handlePopoverClose}>
                      <FontAwesomeIcon icon={faTimesCircle}/>
                    </span>
                </div>
            </div>
        </Popover.Title>
        <Popover.Content>
            <i>{desc}</i> <hr/>
            {sentence}
        </Popover.Content>
      </Popover>
    );

    return (
        <div className="d-flex WordItem-wrapper">
            <OverlayTrigger
                placement={popoverPlacement}
                overlay={popOver}
                show={showPopover}
            >
             <div className="flex-grow-1 WordItem-word">{props.word}</div>
            </OverlayTrigger>
        </div>
    );
}