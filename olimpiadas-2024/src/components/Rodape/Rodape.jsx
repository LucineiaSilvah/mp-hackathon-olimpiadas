import styles from './Rodape.module.css';

const Rodape = () => {
  return (
    <footer className={styles.Rodape}>
      <div>
        <img className={styles.Logo} src="/src/assets/img/2024_Summer_Olympics_logo.svg.png" alt="" />
      </div>
      <div className={styles.Detalhes}>

        <p>hackathon Olimpiadas por: <span><a href="https://codante.io/mini-projetos" target="_blank" rel="noopener noreferrer">Codante</a></span></p>
        <p>Feito com <span className={styles.Core}>&#10084;</span>	  por: <span><a href="https://www.linkedin.com/in/lucineia-r-silva-frontend/" target="_blank" rel="noopener noreferrer">Luh Silva</a></span></p>
      </div>
    </footer>
  );
}

export default Rodape;
