import styles from './GameOverModal.module.css';

// export default function GameOverModal(props) {
//   return (
//     <div className={styles.modalCont}>
//       <h1>Game Over</h1>
//     </div>
//   );
// }

export default function GameOverModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.screenFilterCont} onClick={onClose}>
      <div className={styles.modalCont}>{children}</div>
    </div>
  );
}
