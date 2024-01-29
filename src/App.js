import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer";
import Scrolltop from "./Components/Scrolltop";

import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Scrolltop />
      </div>
    </Router>
  );
}

export default App;

/*
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Scrolltop from "./Components/Scrolltop";
import Team from "./Components/Team";
import Appssection from "./Components/Appssection";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Appssection />
      <Team />
      <Testimonial />
      <Contact />
      <Footer />
      <Scrolltop />
    </div>
  );
}

export default App;

*/
