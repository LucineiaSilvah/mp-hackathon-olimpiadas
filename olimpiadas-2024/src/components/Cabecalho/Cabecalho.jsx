import styles from './Cabecalho.module.css'
const Cabecalho = () => {
  return (
    <header className={styles.Cabecalho}>
      <img src="/src/assets/img/olimpiadas.png" alt="icone olimpiadas" className={styles.Icon}/>
      
    </header>
  );
}

export default Cabecalho;
