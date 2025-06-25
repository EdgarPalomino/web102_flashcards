import "./App.css";
import type FlashcardInformation from "./FlashcardInformation";
import { useState } from "react";

interface FlashcardProps extends FlashcardInformation {
    questionAnswered: boolean;
}

const Flashcard = ({question, answer, subject, questionAnswered}: FlashcardProps) => {

    const [flipping, setFlipping] = useState<boolean>(false);
    const [flipped, setFlipped] = useState<boolean>(false);
    const [shaking, setShaking] = useState<boolean>(false);

    const flipFlashcard = () => {

        if (questionAnswered == false) {
            setShaking((shaking) => (!shaking));
            setTimeout(() => {
                setShaking((shaking) => (!shaking));
            }, 500);
        } else if (questionAnswered == true && flipping == false) {
            setFlipping((flipping) => (!flipping));
            setTimeout(() => {
                setFlipping((flipping) => (!flipping));
            }, 1500);
            setTimeout(() => {
                setFlipped((flipped) => (!flipped));
            }, 750);
        }

    }

    return (
        <div onClick={flipFlashcard} className={`Flashcard ${subject} ${flipping ? "flipping" : ""} ${shaking ? "shaking" : ""}`}>
            <p> {flipped ? answer : question} </p>
        </div>
    );
};

export default Flashcard;
