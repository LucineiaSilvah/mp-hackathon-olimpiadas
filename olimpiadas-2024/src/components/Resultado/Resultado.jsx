import styles from './Resultado.module.css'
import Card from '../Card/Card';
const Resultado ({resultado})=>{
  return(
    <div>
      {resultado.length > 0 ?
      (
        {resultado.map((item,index)=>(
         <Card key={index} dados={item} />
        ))}
      ):(
        <p>sem resultados</p>
      )}
    </div>
  )
}



 