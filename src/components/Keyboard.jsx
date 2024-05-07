const Key = (props) => {
  return (
    <>
      <button
        onClick={(e) => {
          window.dispatchEvent(
            new KeyboardEvent("keyup", {
              key: props.value === 'Back' ? 'Backspace' : props.value,
            })
          );
        }}
      >
        {props.value}
      </button>
    </>
  );
};

const Keyboard = (props) => {
  const keys = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "Enter",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "Back",
  ];
  return (
    <div className="keyboard">
      {keys.map((key, i) => (
        <Key key={i} value={key} />
      ))}
    </div>
  );
};

export default Keyboard;
