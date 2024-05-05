import { supabase } from "../supabaseClient";

export const getWord = async (id) => {
  const { data } = await supabase.from("words").select().eq("id", id);
  return data;
};
