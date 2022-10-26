import About from "./routes/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./routes/Projects";
import "./index.css";
import Random from "./routes/Random";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/random" element={<Random />}></Route>
        <Route path="*" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
