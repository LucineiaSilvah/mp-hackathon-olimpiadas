import { useEffect, useState } from 'react';
import styles from './Principal.module.css';
import Card from '../Card/Card';

const Principal = () => {
  const [data,setData] = useState([]);


  useEffect(()=>{
    fetch("https://apis.codante.io/olympic-games/countries")
    .then(res => res.json()
    .then(data => {setData(data.data) 
      console.log(data.data);
      
  
    })
  )
  },[])
  return (
    <main className={styles.Principal}>
        <h1>Jogos Olimpicos Paris</h1>
       <section className={styles.Box}>

          {data.map(item =>(
             <Card key={item.id} dados={item}/>
          ))}
       </section>
         
      
    </main>
  );
}

export default Principal;
