import styles from './GameBoard.module.css';

export default function GameBoard(props) {
  return (
    <div className={styles.gameBoard}>
      <div className={styles.gameBoardHeader}>
        <div className={styles.gameTitle}>
          <h1>Pokemon Memory</h1>
        </div>

        <div className={styles.scoreBoard}>
          <h2>Score: {props.score}</h2>
          <h2>High Score: {props.highScore}</h2>
        </div>
      </div>
      {props.children}
    </div>
  );
}
