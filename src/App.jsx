import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import data from "./assets/beast-data.json";
import { useState } from "react";
import SelectedBeast from "./components/SelectedBeast";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [shownBeast, setShownBeast] = useState({});

  function handleShowModal(beast) {
    setShowModal(!showModal);
    setShownBeast(beast);
  }

  const [horns, setHorns] = useState("");

  function handleChange(event) {
    setHorns(event.target.value);
  }

  return (
    <div>
      <Header />
      <form>
        <label>Select Number of Horns:</label>
        <select onChange={handleChange}>
          <option value="">All</option>
          <option value="1">1 Horns</option>
          <option value="2">2 Horns</option>
          <option value="3">3 Horns</option>
          <option value="100">100 horns</option>
        </select>
        <p>Number of Horns: {horns}</p>
      </form>
      <Gallery data={data} handleShowModal={handleShowModal} horns={horns} />
      <Footer />
      {showModal && (
        <SelectedBeast
          shownBeast={shownBeast}
          handleShowModal={handleShowModal}
        />
      )}
    </div>
  );
}

export default App;

// need to keep track of the number of horns in state
// give that number to the gallery to FILTER the array you are mapping through to show the HornedBeasts
