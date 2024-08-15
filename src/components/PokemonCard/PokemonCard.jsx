import styles from './PokemonCard.module.css';
import { useState } from 'react';

export default function PokemonCard(props) {
  const [clicked, setClicked] = useState(false);

  function handleCardClick() {
    if (clicked) {
      props.endGame();
    } else {
      setClicked(true);
      props.incrementScore();
    }
  }

  return (
    <div className={styles.pokemonCardCont} onClick={handleCardClick}>
      <img src={props.pokemon.url} alt="" />
      <p className="txt">{props.pokemon.name}</p>
    </div>
  );
}
