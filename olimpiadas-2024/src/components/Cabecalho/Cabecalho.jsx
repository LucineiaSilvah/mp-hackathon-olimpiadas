import styles from './Cabecalho.module.css'
import logo from '/src/assets/img/2024_Summer_Olympics_logo.svg.png'
const Cabecalho = () => {
  return (
    <header className={styles.Cabecalho}>
      <img src={logo} alt="icone olimpiadas" className={styles.Icon}/>
      
    </header>
  );
}

export default Cabecalho;
