import React, { useState, useEffect } from "react";

export default function PokeList({setSelectedPokemonIndex, selectedPokemonIndex }) {
  const [pokemons, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"
        );
        const result = await response.json();
        setPokemon(result);
        console.log(pokemons.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPokemons();
  }, []);

  return (
    <>
      <div className="grid-container">
        {pokemons &&
          pokemons.results.map((pokemon, index) => (
            <div className="flex-item" key={pokemon.name}>
              <div 
                className="card"
                onClick = {() => {
                    setSelectedPokemonIndex(index+1)
                }}
                >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    index + 1
                  }.png`}
                  alt={pokemon.name}
                  className="row1-img"
                />
                <div className="container">
                  <h4>
                    <b>{pokemon.name}</b>
                  </h4>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
