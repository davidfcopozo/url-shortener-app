import "./App.scss";
import Footer from "./components/Footer";
import Footprint from "./components/Footprint";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Section />
        <Footer />
        <Footprint />
      </div>
    </div>
  );
}

export default App;
