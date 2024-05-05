import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "./supabaseClient";
import Grid from './components/Grid';

function Single(params) {
  const { id } = useParams();
  const [word, setWord] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    getWord();
  }, []);

  async function getWord() {
    const { data } = await supabase
      .from("words")
      .select()
      .eq("id", id)
      .single();

    setWord(data);
  }

  useEffect(() => {
    console.log(word);
    if (word) setIsLoading(false);
  }, [word]);

  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <Grid word={word} setSolved={setSolved} />
    </>
  );
}

export default Single;
