import "./App.css";

interface HeaderProps {
    numberOfFlashcards: number;
}

const Header = ({numberOfFlashcards}: HeaderProps) => {
  return (
    <div className="Header">
        <h1> Welcome to Math Trivia! </h1>
        <h3> Here we have created a few flashcards that you can use to test your Linear Algebra and Calculus knowledge! 🧮 </h3>
        <h3> There are currently {numberOfFlashcards} flashcards that you can have fun with! 📔 </h3>
    </div>
  );
};

export default Header;
