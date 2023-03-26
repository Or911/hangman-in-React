import logo from "./logo.svg";
import "./App.css";
import { Score } from "./components/Score";
import { Letters } from "./components/Letters";
import { Solution } from "./components/Solution";
function App() {
  return (
    <div>
      <Score />

      <Solution />

      <Letters />
    </div>
  );
}

export default App;
