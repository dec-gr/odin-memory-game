import styles from './GameOverModal.module.css';

// export default function GameOverModal(props) {
//   return (
//     <div className={styles.modalCont}>
//       <h1>Game Over</h1>
//     </div>
//   );
// }

export default function GameOverModal({
  isOpen,
  onClose,
  playerWon,
  children,
}) {
  if (!isOpen) return null;

  const backgroundUrl = playerWon ? '/src/assets/ashWin.gif' : '/ashLose.gif';

  return (
    <div className={styles.screenFilterCont} onClick={onClose}>
      <div
        className={styles.modalCont}
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      >
        {children}
      </div>
    </div>
  );
}
