import "./App.css";
import { Link, Routes, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./home";
import Fond from "./fond";
import Forme from "./forme";
import Image from "./image";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Fond" element={<Fond />} />
          <Route path="/Forme" element={<Forme />} />
          <Route path="/mindMap" element={<Image />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
