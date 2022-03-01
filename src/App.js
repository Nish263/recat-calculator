import "./App.css";
import { Calculator } from "./components/Calculator";
import Title from "./components/Title";

function App() {
  return (
    <div>
      <div className="wrapper">
        <Title />
        <Calculator />
      </div>
    </div>
  );
}

export default App;
