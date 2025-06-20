import "./App.css";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import type FlashcardInformation from "./FlashcardInformation";

const Flashcard = ({question, answer, subject}: FlashcardInformation) => {
    return (
        <MathJaxContext>
            <div className="Flashcard">
                <div className="information">
                    <div className={`front ${subject}`}>
                    <MathJax>
                        <p> {question} </p>
                    </MathJax>
                </div>
                <div className={`back ${subject}`}>
                    <MathJax>
                        <p> {answer} </p>
                    </MathJax>
                </div>
                </div>
            </div>
        </MathJaxContext>
    );
};

export default Flashcard;
