import styles from './GameBoard.module.css';

export default function GameBoard(props) {
  return (
    <div className={styles.gameBoard}>
      <div className="scoreBoard">
        <h1>Score: {props.score}</h1>
        <h1>High Score: {props.highScore}</h1>
      </div>
      {props.children}
    </div>
  );
}
