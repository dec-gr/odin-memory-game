import { useState, useEffect } from 'react';
import './App.css';
import CardHolder from './components/CardHolder/CardHolder.jsx';
import GameBoard from './components/GameBoard/GameBoard.jsx';
import GameOverModal from './components/GameOverModal/GameOverModal.jsx';
import fetchPokemon from './utils/api.js';

function Loading() {
  return (
    <div className="loader-container">
      <div className="loader">
        <h1>Loading...</h1>
      </div>
    </div>
  );
}

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameNumber, setGameNumber] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [playerWon, setPlayerWon] = useState(false);

  const [open, setOpen] = useState(false);

  //let playerWon = false;

  const handleClose = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  function incrementScore() {
    setScore(score + 1);
  }

  function endGame() {
    if (score >= highScore) {
      setHighScore(score);
      //alert('You Win');
      setPlayerWon(true);
      console.log(playerWon);
    } else {
      //alert('Better luck next time');
      setPlayerWon(false);
      console.log(playerWon);
    }
    openModal();
    setIsLoading(true);
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
          <Loading />
        ) : (
          <CardHolder
            key={gameNumber}
            pokemonData={pokemonData}
            endGame={endGame}
            incrementScore={incrementScore}
          ></CardHolder>
        )}
      </GameBoard>

      <GameOverModal isOpen={open} onClose={handleClose}>
        <>{playerWon ? <h3>You Win</h3> : <h3>You Loose</h3>}</>
      </GameOverModal>
    </>
  );
}

export default App;
