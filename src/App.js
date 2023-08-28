import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Skills,
  Portfolio,
  Web,
  Contact,
  PythonAutomation,
  GraphicDesign,
  Error,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="web" element={<Web />} />
        <Route path="python-automation" element={<PythonAutomation />} />
        {/* <Route path="test" element={<Test />} /> */}
        <Route path="graphic-design" element={<GraphicDesign />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
