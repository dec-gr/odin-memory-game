import styles from './CardHolder.module.css';
import PokemonCard from '../PokemonCard/PokemonCard';

export default function CardHolder(props) {
  let shuffledPokemonData = props.pokemonData
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <div className={styles.cardHolderCont}>
      {shuffledPokemonData.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          endGame={props.endGame}
          incrementScore={props.incrementScore}
        ></PokemonCard>
      ))}
    </div>
  );
}
