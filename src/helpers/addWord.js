import { supabase } from "../supabaseClient";

export const addWord = async (letters, attempts) => {
  const { data, error } = await supabase
    .from("words")
    .insert({
      letters: letters,
      attempts: attempts,
      solved: 0,
    })
    .select();

  if (error) console.error(error);
  return data;
};
