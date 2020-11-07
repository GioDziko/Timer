import './App.css';
import Timer from "./components/timer";
import Darkmode from "./components/darkmode";
function App() {
  return (
    <div className="App" id="App" >
      <p className="caption" >Timer with Break</p>
      <Darkmode />
      <Timer />
    </div>
  );
}

export default App;
