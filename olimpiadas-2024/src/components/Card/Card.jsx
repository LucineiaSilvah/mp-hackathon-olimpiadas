/* eslint-disable react/prop-types */
import styles from './Card.module.css'
import  mOuro from '/src/assets/img/medalha-de-ouro.png'
import  mPrata from '/src/assets/img/medalha-de-prata.png'
import  mBronze from '/src/assets/img/medalha-de-bronze.png'
import  mTotal from '/src/assets/img/medalhas.png'
  const Card = ({dados}) => {


  return (
    <div className={styles.Card}>
      <div>
        <span className={styles.Titulo}> <img className={styles.Bandeira} src={dados.flag_url} alt="" />{dados.name}</span>
       
     <span className={styles.Medalhas}>
     <img width={'30px'} src={mOuro} alt="medalha-de-ouro"/>{dados.gold_medals}
     
   <img width={'30px'} src={mPrata} alt="medalha-de-prata"/>{dados.silver_medals}  
   
  <img width={'30px'} src={mBronze} alt="medalha-de-bronze"/>{dados.bronze_medals} 
     </span>
      </div>
      
     <div className={styles.Detalhes}>
       <img width={'30px'} src={mTotal} alt="medalhas"/> {dados.total_medals}
      
     
     </div>
    
    </div>
  );
}

export default Card;
