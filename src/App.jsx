import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import beastArr from "./Data";

function App() {
  return (
    <div>
      <Header />
      <Gallery beasts={beastArr} />
      <Footer />
    </div>
  );
}

export default App;
