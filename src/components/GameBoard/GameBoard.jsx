export default function GameBoard(props) {
  return (
    <div className="gameBoard">
      <div className="scoreBoard">
        <h1>Score: {props.score}</h1>
        <h1>High Score: {props.highScore}</h1>
      </div>
      {props.children}
    </div>
  );
}
