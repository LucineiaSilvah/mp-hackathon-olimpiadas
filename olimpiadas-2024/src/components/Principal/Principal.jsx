import { useEffect, useState } from 'react';
import styles from './Principal.module.css';
import Card from '../Card/Card';
import CampoPesquisa from '../CampoPesquisa/CampoPesquisa';

const Principal = () => {
  const [data,setData] = useState([]);
  const [pesquisaId,setPesquisaId] = useState('');
  

  useEffect(()=>{
    fetch("https://apis.codante.io/olympic-games/countries")
    .then(res => res.json()
    .then(data => {setData(data.data) 
 
      
  
    })
  )
  },[])
  
const dadosFiltrados = pesquisaId ? data.filter(item=> item.id.toString() === pesquisaId ): data;

const  handlePesquisa=(id)=>{
  setPesquisaId(id)
}

const buscarTodos = ()=>{
 setPesquisaId('')
}

  return (
    <main className={styles.Principal}>
       <h2 className={styles.SubTitulo}>Consultar medalhas Por Pais</h2>
       <CampoPesquisa
       onPesquisa={handlePesquisa}
       onClick={buscarTodos}
       
         />
     
       <section className={styles.Box}> {dadosFiltrados.length > 0 ? ( dadosFiltrados.map(item => ( <Card key={item.id} dados={item} /> )) ) : ( 
       <div className={styles.SemResultado}>
        <p >Nenhum resultado encontrado</p> 
       </div> )} 
       
      </section>
      
    </main>
    
  );
}

export default Principal;
