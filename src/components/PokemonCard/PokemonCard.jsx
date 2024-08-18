import styles from './PokemonCard.module.css';
import Tilt from 'react-parallax-tilt';
import { useState, useEffect } from 'react';

export default function PokemonCard(props) {
  // function handleCardClick() {
  //   if (clicked) {
  //     props.endGame();
  //   } else {
  //     setClicked(true);
  //     props.incrementScore();
  //   }
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     props.setCardsVisible(true);
  //   }, 850);
  // });

  // className={`${styles.pokemonCardCont}  ${
  //   props.cardsVisible ? styles.showFront : styles.showBack
  // }`}

  return (
    <Tilt
      tiltReverse
      reset
      glareEnable={true}
      glareMaxOpacity={0.4}
      glareColor={'#f1b818'}
      glarePosition="all"
    >
      <div
        className={`${styles.pokemonCardCont}  ${
          props.cardsVisible ? styles.showFront : 'null'
        }`}
        onClick={props.handleCardClick}
      >
        <div className={styles.card}>
          <div className={styles.front}>
            <img src={props.pokemon.url} alt="" />
            <p className="txt">{props.pokemon.name}</p>
          </div>
          <div className={styles.back}></div>
        </div>
      </div>
    </Tilt>
  );
}

// ${
//   props.cardsVisible ? styles.flip : 'Knull'
// }`
