import "./App.css";
import List from "./Components/List";
import Add from "./Components/Add";
import Edite from "./Components/Edit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/list" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edite />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
