import React, { useState, useEffect } from "react";

export default function SelectedPokemon({
  selectedPokemonIndex,
  setSelectedPokemonIndex,
}) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon-species/${selectedPokemonIndex}/`;
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContact();
  }, []);

  return (
    <>
      {pokemon ? (
        <div className="selected-flex-item">
          <div className="selected-card">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${selectedPokemonIndex}.png`}
              alt={pokemon.name}
              className="row2-img"
            />
            <div className="selected-container">
              <h1>
                <b>{pokemon.name}</b>
              </h1>
              <h4>Pokidex Entry:</h4>
              <p>{pokemon.flavor_text_entries[0].flavor_text}</p>

            </div>
          </div>
        </div>

        
      ) : (
        <p>Loading contact information...</p>
      )}
      <button onClick={() => setSelectedPokemonIndex(null)}>
        Clear Selection
      </button>
    </>
  );
}
