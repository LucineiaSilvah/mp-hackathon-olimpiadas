import { useEffect, useState } from 'react';
import styles from './Principal.module.css';
import Card from '../Card/Card';
import CampoPesquisa from '../CampoPesquisa/CampoPesquisa';

const Principal = ({value}) => {
  const [data,setData] = useState([]);
  const [pesquisaId,setPesquisaId] = useState('');
  

  useEffect(()=>{
    fetch("https://apis.codante.io/olympic-games/countries")
    .then(res => res.json()
    .then(data => {setData(data.data) 
      console.log(data.data);
      
  
    })
  )
  },[])
  
const dadosFiltrados = pesquisaId ? data.filter(item=> item.id.toString() === pesquisaId ): data;

const  handlePesquisa=(id)=>{
  setPesquisaId(id)
}
const buscar = ()=>{
 setValor(value)
 alert(valor)
 
}


  return (
    <main className={styles.Principal}>
        <h1>Jogos Olimpicos Paris</h1>
       <CampoPesquisa
       onPesquisa={handlePesquisa}
       
       
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
