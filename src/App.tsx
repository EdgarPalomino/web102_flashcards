import "./App.css";
import Header from "./Header";
import Flashcard from "./Flashcard";
import type FlashcardInformation from "./FlashcardInformation";
import { useState, type ChangeEvent } from "react";

const App = () => {

  const flashcards: FlashcardInformation[] = [
    {question: "What is the limit of 3 as x goes to infinity?", answer: "3", subject: "calculus"},
    {question: "What is the derivative of 2x?", answer: "2", subject: "calculus"},
    {question: "What is the derivative of e^x?", answer: "e^x", subject: "calculus"},
    {question: "What is the integral of 1/x?", answer: "ln(x) + c", subject: "calculus"},
    {question: "What is the integral of cos(x)?", answer: "sin(x) + c", subject: "calculus"},
    {question: "How many rows does a 2 x 4 matrix have?", answer: "2", subject: "linear-algebra"},
    {question: "How many columns does a 3 x 1 matrix have?", answer: "1", subject: "linear-algebra"},
    {question: "What is the determinant of a non-invertible matrix?", answer: "0", subject: "linear-algebra"},
    {question: "What are the dimensions of an m x n matrix after inverting it?", answer: "n x m", subject: "linear-algebra"},
    {question: "How many vectors in R^n are needed to span R^n?", answer: "n", subject: "linear-algebra"},
  ];

  const [shuffledFlashcards, setShuffledFlashcards] = useState<FlashcardInformation[]>(flashcards);
  const [guessText, setGuessText] = useState<string>("");
  const [flashcardIndex, setFlashcardIndex] = useState<number>(0);
  const [answeredFlashcardIndeces, setAnsweredFlashcardIndeces] = useState<number[]>([]);
  const [rightGuessesIndeces, setRightGuessesIndeces] = useState<number[]>([]);
  const [wrongGuessesIndeces, setWrongGuessesIndeces] = useState<number[]>([]);
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [longestStreak, setLongestStreak] = useState<number>(0);

  const handleUpdateGuess = (e: ChangeEvent<HTMLInputElement>) => {
    setGuessText(e.target.value);
  };

  const handleCheckGuess = () => {

    if (answeredFlashcardIndeces.includes(flashcardIndex) == false) {
      setAnsweredFlashcardIndeces((answeredFlashcardIndeces) => ([...answeredFlashcardIndeces, flashcardIndex]));
    } else {
      return;
    }

    if (guessText.toLowerCase().replace(" ", "") == flashcards[flashcardIndex].answer.toLowerCase().replace(" ", "")) {
      setCurrentStreak((currentStreak) => {
        setLongestStreak((longestStreak) => {
          return Math.max(currentStreak+1, longestStreak);
        });
        return currentStreak+1;
      });
      setRightGuessesIndeces((rightGuessesIndeces) => ([...rightGuessesIndeces, flashcardIndex]));
    } else {
      setCurrentStreak(0);
      setWrongGuessesIndeces((wrongGuessesIndeces) => ([...wrongGuessesIndeces, flashcardIndex]));
    }
  };

  const handlePreviousQuestion = () => {
    setFlashcardIndex((flashcardIndex) => (flashcardIndex-1));
  };
  
  const handleNextQuestion = () => {
    setFlashcardIndex((flashcardIndex) => (flashcardIndex+1));
  };

  const handleShuffleQuestions = () => {

    let currentIndex = flashcards.length - 1;

    while (currentIndex > 0) {
      const randomIndex = Math.floor(Math.random()*(currentIndex+1));
      [flashcards[currentIndex], flashcards[randomIndex]] = [flashcards[randomIndex], flashcards[currentIndex]];
      currentIndex = currentIndex - 1;
    }

    setShuffledFlashcards(flashcards);
    setFlashcardIndex(0);
    setAnsweredFlashcardIndeces([]);
    setRightGuessesIndeces([]);
    setWrongGuessesIndeces([]);
    setCurrentStreak(0);

  };

  return (
    <div className="App">
        <Header
          numberOfFlashcards={flashcards.length}
          currentStreak={currentStreak}
          longestStreak={longestStreak}
        />
        <Flashcard
          question={shuffledFlashcards[flashcardIndex].question}
          answer={shuffledFlashcards[flashcardIndex].answer}
          subject={shuffledFlashcards[flashcardIndex].subject}
          questionAnswered={answeredFlashcardIndeces.includes(flashcardIndex)}
        />
        <input type="text" placeholder="Your Guess" onChange={handleUpdateGuess} />
        <span> {rightGuessesIndeces.includes(flashcardIndex) ? "✔️" : ""} </span>
        <span> {wrongGuessesIndeces.includes(flashcardIndex) ? "❌" : ""} </span>
        <button onClick={handleCheckGuess}> Check Guess </button>
        <button onClick={handlePreviousQuestion} disabled={flashcardIndex == 0}> Previous Question </button>
        <button onClick={handleNextQuestion} disabled={flashcardIndex == flashcards.length-1}> Next question </button>
        <button onClick={handleShuffleQuestions}> Shuffle Questions </button>
      </div>
  );

};

export default App;
