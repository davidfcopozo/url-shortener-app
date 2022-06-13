import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <div class="container">
        <Header/>
        <Section />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
