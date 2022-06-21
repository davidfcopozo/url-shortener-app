import { useState } from "react";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import Section from "./components/Section";
import ShortenedLinks from "./components/ShortenedLinks";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <div class="container">
        <Header />
        <Section />
        <Input setInputValue={setInputValue} />
        <ShortenedLinks inputValue={inputValue} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
