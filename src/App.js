import logo from "./logo.svg";
import "./App.css";
import { Score } from "./components/Score";
import { Letters } from "./components/Letters";
import { Solution } from "./components/Solution";
import { useState } from "react";

function App() {
  const [solution, setSolution] = useState(generateLetter("ORRLANDO"));
  const [score, setScore] = useState(120);

  function generateLetter(word) {
    let letterStatus = { word: [] };
    for (let letter of word.split("")) {
      letterStatus[letter] = false;
      letterStatus.word.push(letter);
    }
    return letterStatus;
  }

  function filterSolution(solution) {
    return solution.word.map((w) => (solution[w] ? w : "_"));
  }
  function selectLetter(letter) {
    if (score === 0) {
      return;
    }
    if (solution.word.some((w) => w === letter)) {
      solution[letter] = true;
      setSolution({ ...solution, [letter]: true });
    } else {
      setScore(score - 20);
    }
  }
  return (
    <div>
      <Score score={score} />
      <Solution letters={filterSolution(solution)} />
      <Letters selectLetter={selectLetter} />
      <div>
        <h1>{score == 0 ? "GAME OVER" : ""}</h1>
      </div>
    </div>
  );
}

export default App;
