import { useState, useEffect } from 'react';
import './App.css';
import CardHolder from './components/CardHolder/CardHolder.jsx';
import GameBoard from './components/GameBoard/GameBoard.jsx';

const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';

async function fetchPokemon(pokemonIdArray) {
  const pokemonArray = [];
  for (let id of pokemonIdArray) {
    const response = await fetch(pokemonUrl + id);
    const responseJson = await response.json();
    pokemonArray.push({
      name: responseJson.name,
      url: responseJson.sprites.front_default,
      id: responseJson.id,
    });
  }
  return pokemonArray;
}

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameNumber, setGameNumber] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);

  function incrementScore() {
    setScore(score + 1);
  }

  function endGame() {
    if (score >= highScore) {
      setHighScore(score);
      alert('You Win');
    } else {
      alert('Better luck next time');
    }
    setScore(0);
    setGameNumber(gameNumber + 1);
  }

  if (score >= 8) {
    endGame();
  }

  const pokemonIdArray = Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 1026)
  );

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      const fetchedPokemonData = await fetchPokemon(pokemonIdArray);
      if (!ignore) {
        setPokemonData(fetchedPokemonData);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, [gameNumber]);

  return (
    <>
      <GameBoard score={score} highScore={highScore}>
        <CardHolder
          key={gameNumber}
          pokemonData={pokemonData}
          endGame={endGame}
          incrementScore={incrementScore}
        ></CardHolder>
      </GameBoard>
    </>
  );
}

export default App;
