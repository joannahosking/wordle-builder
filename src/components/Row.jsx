const Row = (props) => {
  const { answer, guess, currentGuess, length } = { ...props };

  if (guess) {
    let letters = guess.split("");

    return (
      <div className="row">
        {letters.map((letter, i) => {
          let style = "incorrect";
          if (letter === answer[i]) {
            style = "correct";
          } else if (answer.includes(letter)) {
            style = "misplaced";
          }
          return (
            <div key={i} className={`filled ${style}`}>
              {letter}
            </div>
          );
        })}
      </div>
    );
  } else if (currentGuess) {
    let letters = currentGuess.split("");

    return (
      <div className="row current">
        {letters.map((letter, i) => (
          <div key={i} className="filled">
            {letter}
          </div>
        ))}
        {[...Array(length - letters.length)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="row">
        {[...Array(length)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    );
  }
};

export default Row;
