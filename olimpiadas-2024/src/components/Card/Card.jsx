/* eslint-disable react/prop-types */
import styles from './Card.module.css'
import  mOuro from '/src/assets/img/medalha-de-ouro.png'
import  mPrata from '/src/assets/img/medalha-de-prata.png'
import  mBronze from '/src/assets/img/medalha-de-bronze.png'
  const Card = ({dados}) => {


  return (
    <div className={styles.Card}>
      <img width={'100%'} src={dados.flag_url} alt="" />
     <span>
     <img width={'30px'} src={mOuro} alt="medalha-de-ouro"/>{dados.gold_medals}
     </span>
     <span>
     <img width={'30px'} src={mPrata} alt="medalha-de-prata"/>{dados.silver_medals}
     </span>
     <span>
     <img width={'30px'} src={mBronze} alt="medalha-de-bronze"/>{dados.bronze_medals}
     </span>
    <span>TOTAL: {dados.total_medals}</span>
      <p>Nome: {dados.name}</p>
      <p>Continente: {dados.continent}</p>
    </div>
  );
}

export default Card;
