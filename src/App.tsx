import "./App.css";
import Header from "./Header";
import Flashcard from "./Flashcard";
import type FlashcardInformation from "./FlashcardInformation";
import { useState } from "react";

const App = () => {

  const flashcards: FlashcardInformation[] = [
    {question: "What is the limit of $$3$$ as $$x$$ goes to infinity?", answer: "$$0$$", subject: "calculus"},
    {question: "What is the derivative of $$2x$$?", answer: "$$2$$", subject: "calculus"},
    {question: "What is the derivative of $$e^x$$?", answer: "$$e^x$$", subject: "calculus"},
    {question: "What is the integral of $$\\frac{1}{x}$$?", answer: "$$ln(x) + c$$", subject: "calculus"},
    {question: "What is the integral of $$\\cos(x)?$$", answer: "$$\\sin(x)$$", subject: "calculus"},
    {question: "How many rows does a $$2 \\times 4$$ matrix have?", answer: "$$2$$", subject: "linear-algebra"},
    {question: "How many columns does a $$3 \\times 1$$ matrix have?", answer: "$$1$$", subject: "linear-algebra"},
    {question: "What is the determinant of a non-invertible matrix?", answer: "$$0$$", subject: "linear-algebra"},
    {question: "What are the dimensions of an $$m \\times n$$ matrix after inverting it?", answer: "$$n \\times m$$", subject: "linear-algebra"},
    {question: "How many vectors in $$\\mathbb{R}^n$$ are needed to span $$\\mathbb{R}^n$$", answer: "$$n$$", subject: "linear-algebra"},
  ];

  const firstQuestion = Math.floor(Math.random()*flashcards.length);
  const [flashcard, setFlashcard] = useState<FlashcardInformation>(flashcards[firstQuestion]);

  const handleNextQuestion = () => {
    const nextQuestion = Math.floor(Math.random()*flashcards.length);
    setFlashcard(flashcards[nextQuestion]);
  };

  return (
    <div className="App">
        <Header numberOfFlashcards={flashcards.length} />
        <Flashcard question={flashcard.question} answer={flashcard.answer} subject={flashcard.subject} />
        <br />
        <button onClick={handleNextQuestion}> Next question </button>
      </div>
  );

};

export default App;
