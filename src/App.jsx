import "./App.css";
import PokeList from "./components/PokeList";
import NavBar from "./components/NavBar.jsx";
import SelectedPokemon from "./components/SelectedPokemon";
import React from "react";
import { useState } from "react";

function App() {
  const [selectedPokemonIndex, setSelectedPokemonIndex] = useState(null);

  return (
    <>
      <NavBar />
      <div className="separator"></div>
      {selectedPokemonIndex ? (
        <SelectedPokemon
          selectedPokemonIndex={selectedPokemonIndex}
          setSelectedPokemonIndex={setSelectedPokemonIndex}
        />
      ) : (
        <PokeList setSelectedPokemonIndex={setSelectedPokemonIndex} selectedPokemonIndex={selectedPokemonIndex}/>
      )}
    </>
  );
}

export default App;
