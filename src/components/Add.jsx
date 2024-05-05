import { addWord } from "../helpers/addWord";

const Add = () => {
  const handleAdd = (e) => {
    e.preventDefault();
    let letters = e.target.elements.letters.value;
    let attempts = e.target.elements.attempts.value;

    console.log(addWord(letters, attempts));
  };

  return (
    <form onSubmit={handleAdd}>
      <input type="text" name="letters" placeholder="EXAMPLE" maxLength="10" />
      <select name="attempts">
        {[3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <button>Create</button>
    </form>
  );
};

export default Add;
