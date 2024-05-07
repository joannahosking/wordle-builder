import { useState, useEffect } from "react";
import Row from "./Row";
import Keyboard from "./Keyboard";
import Modal from "./Modal";

const Grid = (props) => {
  const { word } = { ...props };
  const [guesses, setGuesses] = useState(Array(word.attempts).fill(""));
  const [currentGuess, setCurrentGuess] = useState("");
  const [round, setRound] = useState(0);
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null);
  const [shake, setShake] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const handleShake = (error) => {
    setShake(true);
    setMessage(error);

    setTimeout(() => {
      setShake(false);
      setMessage(null);
    }, 1000);
  };

  const listener = (e) => {
    if (e.key === "Enter") {
      if (currentGuess.length < word.letters.length) {
        handleShake("Not enough letters.");
      } else if (guesses.includes(currentGuess)) {
        handleShake("Already tried word.");
      } else {
        // add word to guesses and increment round
        let temp = [...guesses];
        temp[round] = currentGuess;
        setGuesses(temp);
        setRound((prev) => prev + 1);
        // win condition check
        if (currentGuess === word.letters) {
          setMessage("Congratulations!");
          setStatus("win");
          setGameOver(true);
        }
        // loss condition check
        if (round + 1 === word.attempts) {
          setMessage(word.letters);
          setStatus("loss");
          setGameOver(true);
        }
        // empty current guess
        setCurrentGuess("");
      }
    } else if (e.key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    } else if (e.key.match(/^[A-Za-z]$/)) {
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
      <div className="puzzle-wrapper">
        {guesses.map((guess, i) => {
          if (i === round) {
            return (
              <Row
                key={i}
                answer={word.letters}
                currentGuess={currentGuess}
                length={word.letters.length}
                shake={shake}
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
        <Modal message={message} status={status} />
      </div>
      <Keyboard />
    </div>
  );
};

export default Grid;
