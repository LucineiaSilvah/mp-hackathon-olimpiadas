import styles from './App.module.css';
import Cabecalho from './components/Cabecalho/Cabecalho';
import Principal from './components/Principal/Principal';

function App() {


  return (
    <>
      <div className={styles.Container}>
         <Cabecalho/>
         <Principal/>
      </div>
    </>
  )
}

export default App
