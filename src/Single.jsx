import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "./supabaseClient";
import Grid from "./components/Grid";

function Single(params) {
  const { id } = useParams();
  const [word, setWord] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getWord();
  }, []);

  async function getWord() {
    const { data } = await supabase
      .from("words")
      .select()
      .eq("short_id", id)
      .single();

      if (data) {
        setWord(data);
      } else {
        window.location = window.location.origin + '/404';
      }
  }

  useEffect(() => {
    if (word) setIsLoading(false);
  }, [word]);

  if (isLoading) {
    return (
      <>
        <p className="loading">Loading...</p>
      </>
    );
  }

  return (
    <>
      <Grid word={word} />
    </>
  );
}

export default Single;
