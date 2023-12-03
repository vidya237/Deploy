import Navbar from "./Component/Navbar";
import Intro from "./Component/Intro";
import Skills from "./Component/Skills";
import Project from "./Component/Project";
import Contact from "./Component/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
