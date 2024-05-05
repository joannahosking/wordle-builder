import { supabase } from "../supabaseClient";

export const getRandomWord = async () => {
  const { data } = await supabase
    .from("words")
    .select()
    .order("RANDOM", { ascending: false })
    .limit(1)
    .single();
  return data;
};
