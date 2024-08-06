import styles from './Rodape.module.css';

const Rodape = () => {
  return (
    <footer className={styles.Rodape}>
        <p>hackathon Olimpiadas por: <span><a href="https://codante.io/mini-projetos" target="_blank" rel="noopener noreferrer">Codante</a></span></p>
        <p>Feito com &#10084;	  por: <span><a href="https://www.linkedin.com/in/lucineia-r-silva-frontend/" target="_blank" rel="noopener noreferrer">Luh Silva</a></span></p>
    </footer>
  );
}

export default Rodape;
