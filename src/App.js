import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollTop from "./Components/ScrollTop";
import Team from "./Components/Team";
import AppsSection from "./Components/AppsSection";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <AppsSection />
      <Team />
      <Testimonial />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
