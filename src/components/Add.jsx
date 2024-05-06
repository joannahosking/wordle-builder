import { supabase } from "../supabaseClient";

function createRandomString(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

const Add = (props) => {
  const { setUrl } = { ...props };

  const handleAdd = async (e) => {
    e.preventDefault();
    let letters = e.target.elements.letters.value;
    let attempts = e.target.elements.attempts.value;

    const { data, error } = await supabase
      .from("words")
      .insert({
        letters: letters,
        attempts: attempts,
        solved: 0,
        short_id: createRandomString(8),
      })
      .select()
      .single();

    if (data.short_id) {
      setUrl(data.short_id);
    }
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        name="letters"
        placeholder="EXAMPLE"
        maxLength="10"
        defaultValue={""}
      />
      <select name="attempts" defaultValue="6">
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
