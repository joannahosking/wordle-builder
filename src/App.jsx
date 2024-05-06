import { useState } from "react";
import { Link } from "react-router-dom";
import Add from "./components/Add";
import "./App.css";

function App() {
  const [url, setUrl] = useState(null);
  return (
    <main>
      <p>
        This platform allows you to create your own word guessing game inspired
        by Wordle. Choose any word you like, up to 10 characters long, and set
        the number of attempts players have to guess it correctly. Once you've
        defined your word and difficulty, a unique URL is generated that you can
        share with friends and challenge them to solve your custom puzzle.
      </p>
      <Add setUrl={setUrl} />
      {url && (
        <div className="url">
          <span>{window.location.origin + "/" + url}</span>
          <button
            onClick={() => navigator.clipboard.writeText(window.location + url)}
          >
            copy
          </button>
          <Link to={`/${url}`}>visit</Link>
        </div>
      )}
    </main>
  );
}

export default App;
