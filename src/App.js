import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import { ShortenedlinksProvider } from "./contexts/ShortenedContext";

function App() {
  return (
    <ShortenedlinksProvider>
      <div className="App">
        <div class="container">
          <Header />
          <Section />
          <Footer />
        </div>
      </div>
    </ShortenedlinksProvider>
  );
}

export default App;
