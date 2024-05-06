import { useState, useEffect } from "react";
import Row from "./Row";

const Grid = (props) => {
  const { word } = { ...props };
  const [guesses, setGuesses] = useState(Array(word.attempts).fill(""));
  const [currentGuess, setCurrentGuess] = useState("");
  const [round, setRound] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const listener = (e) => {
    if (e.key === "Enter") {
      if (currentGuess.length < word.letters.length) {
        console.log("your word is too short");
      } else if (guesses.includes(currentGuess)) {
        console.log("you tried that word already");
      } else {
        // add word to guesses and increment round
        let temp = [...guesses];
        temp[round] = currentGuess;
        setGuesses(temp);
        setRound((prev) => prev + 1);
        // win condition check
        if (currentGuess === word.letters) {
          console.log("you win");
          setGameOver(true);
        }
        // loss condition check
        if (round + 1 === word.attempts) {
          console.log("you lose");
          setGameOver(true);
        }
        // empty current guess
        setCurrentGuess("");
      }
    } else if (e.key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    } else if (e.key.match(/^[A-Za-z]$/)) {
      console.log(currentGuess.length);
      if (currentGuess.length < word.letters.length) {
        setCurrentGuess((prev) => prev + e.key);
      }
    }
  };

  useEffect(() => {
    if (!gameOver) {
      window.addEventListener("keyup", listener);
  
      return () => {
        window.removeEventListener("keyup", listener);
      };
    }
  }, [currentGuess, round, guesses, currentGuess, gameOver]);

  return (
    <div className="grid">
      (The word is {word.letters})
      {guesses.map((guess, i) => {
        if (i === round) {
          return (
            <Row
              key={i}
              answer={word.letters}
              currentGuess={currentGuess}
              length={word.letters.length}
            />
          );
        }
        return (
          <Row
            key={i}
            answer={word.letters}
            guess={guess}
            length={word.letters.length}
          />
        );
      })}
    </div>
  );
};

export default Grid;
