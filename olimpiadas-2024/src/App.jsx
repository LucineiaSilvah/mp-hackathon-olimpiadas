import styles from './App.module.css';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Principal from './components/Principal/Principal';
import Rodape from './components/Rodape/Rodape';

function App() {


  return (
    <>
      <div className={styles.Container}>
         <Cabecalho/>
         <Principal/>
         <Rodape/>
      </div>
    </>
  )
}

export default App
