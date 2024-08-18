import styles from '../PokemonCard/PokemonCard.module.css';
import PokemonCard from '../PokemonCard/PokemonCard';
import { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';

export default function CardHolder(props) {
  //const [isFlipped, setIsFlipped] = useState(true);
  // let shuffledPokemonData = props.pokemonData
  //   .map((value) => ({ value, sort: Math.random() }))
  //   .sort((a, b) => a.sort - b.sort)
  //   .map(({ value }) => value);

  return (
    <div className={`${styles.cardHolderCont}`}>
      {props.pokemonData.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          endGame={props.endGame}
          incrementScore={props.incrementScore}
          cardsVisible={props.cardsVisible}
          setCardsVisible={props.setCardsVisible}
          handleCardClick={() => props.handleCardClick(pokemon.id)}
        ></PokemonCard>
      ))}
    </div>
  );
}
