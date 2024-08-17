import styles from './PokeballLoading.module.css';

export default function PokeballLoading() {
  return (
    <div className={styles.loadingCont}>
      <div className="loader">
        <img className={styles.pokeballImg} src="/pokeball-icon-4.png" alt="" />
        <h2>Catching Pokemon</h2>
      </div>
    </div>
  );
}
