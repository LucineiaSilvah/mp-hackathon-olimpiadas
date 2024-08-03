import { useEffect, useState } from 'react';
import styles from './Principal.module.css';
import Card from '../Card/Card';
import CampoPesquisa from '../CampoPesquisa/CampoPesquisa'
const Principal = ({valor}) => {
  const [data,setData] = useState([]);


  useEffect(()=>{
    fetch("https://apis.codante.io/olympic-games/countries")
    .then(res => res.json()
    .then(data => {setData(data.data) 
      console.log(data.data);
      
  
    })
  )
  },[])
  

const buscar = ()=>{
 //setValor(valor)
 alert('ok')
  
}


  return (
    <main className={styles.Principal}>
        <h1>Jogos Olimpicos Paris</h1>
       <CampoPesquisa
       onClick={buscar}
       
       
         />
         
       <section className={styles.Box}>

          {data.map(item =>(
             <Card key={item.id} dados={item}/>
          ))}
       </section>
         
      
    </main>
  );
}

export default Principal;
