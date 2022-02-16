import "./App.css";
import { useState } from "react";
import Main from "./components/Main";
import Welcome from "./components/Welcome";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  // let [displayMain, setDisplayMain] = useState(false);

  // function toggleDisplay(event) {
  //   setDisplayMain(!displayMain);
  // }

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="main/" element={<Main />} />
          </Routes>

          {/* {displayMain ? <Main /> : <Welcome />} */}
          {/* <button onClick={toggleDisplay}>TOGGLE THE VIEW</button> */}
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
