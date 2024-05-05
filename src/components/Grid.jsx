import { useState, useEffect } from "react";
import Row from './Row';
import Keys from './Keys';

const Grid = (props) => {
  const { word, setSolved } = { ...props };
  const [guesses, setGuesses] = useState([]);

  useEffect(() => {
    let wordLength = word.letters.length;
    let wordAttempts = word.attempts;
    let guessesArray = [];

    for (let x = 0; x < wordAttempts; x++) {
      let string = "";
      for (let y = 0; y < wordLength; y++) {
        string += " ";
      }
      guessesArray.push(string);
    }
    setGuesses(guessesArray);
  }, []);

  return (
    <div className="grid">
      {guesses.map((guess, i) => (
        <Row key={i} word={guess} />
      ))}
      <Keys />
    </div>
  );
};

export default Grid;
