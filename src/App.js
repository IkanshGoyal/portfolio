import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import StartScene from "./SplineScene";
import Home from "./pages/Home";
// import About from './pages/About';
// import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
		<CustomCursor />
      <div>
        <Routes>
          <Route path="/" element={<StartScene />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;