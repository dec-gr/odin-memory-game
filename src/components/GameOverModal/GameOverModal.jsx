import styles from './GameOverModal.module.css';

export default function GameOverModal({
  isOpen,
  onClose,
  playerWon,
  children,
}) {
  if (!isOpen) return null;

  const backgroundUrl = playerWon ? '/ashWin.gif' : '/ashLose.gif';

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
