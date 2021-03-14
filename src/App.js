import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import MiddleMenu from "./Components/MiddleMenu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MiddleMenu />
      <Hero />
    </div>
  );
}

export default App;
