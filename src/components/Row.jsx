const Row = (props) => {
  const { word } = { ...props };

  return (
    <div className="row">
      {word.split("").map((letter, i) => (
        <div key={i} className="letter">
          {letter}
        </div>
      ))}
    </div>
  );
};

export default Row;
