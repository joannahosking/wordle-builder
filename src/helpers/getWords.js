import {supabase} from '../supabaseClient';

export const getWords = async () => {
  const { data } = await supabase.from("words").select();
  return data;
};
