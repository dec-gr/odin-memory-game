import { useState, useEffect } from 'react';
import './App.css';
import CardHolder from './components/CardHolder/CardHolder.jsx';
import GameBoard from './components/GameBoard/GameBoard.jsx';
import fetchPokemon from './utils/api.js';

function Loading() {
  return (
    <div className="loader-container">
      <div className="loader">Loading...</div>
    </div>
  );
}

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameNumber, setGameNumber] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function incrementScore() {
    setScore(score + 1);
  }

  function endGame() {
    setIsLoading(true);
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

  let pokemonIdArray = Array.from({ length: 14 }, () =>
    Math.floor(Math.random() * 1026)
  );

  pokemonIdArray = [...new Set(pokemonIdArray)].slice(0, 8);

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      const fetchedPokemonData = await fetchPokemon(pokemonIdArray);
      if (!ignore) {
        setPokemonData(fetchedPokemonData);
        setIsLoading(false);
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
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <CardHolder
            key={gameNumber}
            pokemonData={pokemonData}
            endGame={endGame}
            incrementScore={incrementScore}
          ></CardHolder>
        )}
      </GameBoard>
    </>
  );
}

export default App;
