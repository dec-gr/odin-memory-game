import { useState, useEffect } from 'react';
import './App.css';
import CardHolder from './components/CardHolder/CardHolder.jsx';
import GameBoard from './components/GameBoard/GameBoard.jsx';
import GameOverModal from './components/GameOverModal/GameOverModal.jsx';
import PokeballLoading from './components/PokeballLoading/PokeballLoading.jsx';
import fetchPokemon from './utils/api.js';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameNumber, setGameNumber] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [playerWon, setPlayerWon] = useState(false);

  const [open, setOpen] = useState(false);

  const [cardsVisible, setCardsVisible] = useState(false);

  const maximumScore = 8;

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  function incrementScore() {
    setScore(score + 1);
    setCardsVisible(false);
  }

  function endGame() {
    {
      score >= highScore && setHighScore(score);
    }

    {
      score >= maximumScore ? setPlayerWon(true) : setPlayerWon(false);
    }

    openModal();
    setIsLoading(true);
    setScore(0);
    setGameNumber(gameNumber + 1);
  }

  if (score >= maximumScore) {
    endGame();
  }

  //TODO 0 isn't a valid id
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
          <PokeballLoading />
        ) : (
          <CardHolder
            key={gameNumber}
            pokemonData={pokemonData}
            endGame={endGame}
            incrementScore={incrementScore}
            cardsVisible={cardsVisible}
            setCardsVisible={setCardsVisible}
          ></CardHolder>
        )}
      </GameBoard>

      <GameOverModal isOpen={open} onClose={closeModal} playerWon={playerWon}>
        <>{playerWon ? <h3>You Win</h3> : <h3>You Loose</h3>}</>
      </GameOverModal>
    </>
  );
}

export default App;
