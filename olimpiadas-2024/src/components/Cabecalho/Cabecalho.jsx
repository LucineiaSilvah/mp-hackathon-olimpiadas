import styles from './Cabecalho.module.css'
import logo from '/src/assets/img/olimpiadas.png'
const Cabecalho = () => {
  return (
    <header className={styles.Cabecalho}>
      <img src={logo} alt="icone olimpiadas" className={styles.Icon}/>
      
    </header>
  );
}

export default Cabecalho;
