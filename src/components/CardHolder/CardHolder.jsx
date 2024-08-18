import styles from './CardHolder.module.css';
import PokemonCard from '../PokemonCard/PokemonCard';

export default function CardHolder(props) {
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
