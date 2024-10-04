import Navigation from "./container/Navigation";
import HeroPage from "./container/HeroPage";
import About from "./container/About";
import Portfolio from "./container/Portfolio";
import Contact from "./container/Contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroPage />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
