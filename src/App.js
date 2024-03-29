import About from "./routes/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./routes/Projects";
import "./index.css";
// import Random from "./routes/Random";

function App() {
  return (
    // <BrowserRouter>
    <Router>
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        {/* <Route path="/random" element={<Random />}></Route> */}
        <Route path="*" element={<About />}></Route>
      </Routes>
    </Router>
    // </BrowserRouter>
  );
}

export default App;
