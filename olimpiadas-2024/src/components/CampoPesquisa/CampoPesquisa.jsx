/* eslint-disable react/prop-types */
import styles from './CamposPesquisa.module.css';
import lupa from '/src/assets/img/lupa.png';
import {useState} from 'react'
const CampoPesquisa = ({onPesquisa,onClick}) => {

const [valorInput,setValorInput]= useState('');

const [focus,setFocus]=useState(false);

const  handleChange = (e)=>{
  setValorInput(e.target.value)
  
}

const handleFocus =(e)=>{
	
	setFocus(true);
	
}




const handleBlur=()=>{
   
   setFocus(false)
 }



const  handleClick = ()=>{
  onPesquisa(valorInput.toUpperCase())
  setValorInput("");
}

    return(
      <>
       
       <div className={styles.Campo}>
      
           <input className={styles.CampoPesquisa} type="search"
           value={valorInput} 
           onChange={handleChange}
            id="pesquisar"
            onFocus={handleFocus}
           onBlur={handleBlur}
            placeholder="Ex: BRA, JPN"
            /><button className={styles.Busca} onClick={handleClick}  type="button">  <img className={styles.Lupa} src={lupa} alt="imagem lupa"/></button>
            <button className={styles.Todos} onClick={onClick}>Todos</button>
       </div>
       
      {focus &&
     <div className={styles.DicaBox} >
     <p>*Dica de Pesquisa</p>
    <ul className={styles.Dica}>
      
      <li>EUA (Estados Unidos)</li>
      <li>CHN (China)</li>
      <li>JPN (Japão)</li>
      <li>GBR (Grã-Bretanha)</li>
      <li>AUS (Austrália) </li>
      <li>CAN (Canadá)</li>
      <li>FRA (França)</li>  
      <li>GER (Alemanha)</li> 
      <li>ITA (Itália)</li>  
      <li>NED (Países Baixos)</li>    
      <li>KOR (Coreia do Sul)</li> 
      <li>BRA (Brasil)</li>  
      <li>ESP (Espanha)</li>  
      <li>SWE (Suécia)</li>
      <li>NZL (Nova Zelândia) </li> 
    </ul>
     </div> 
      }
     
 

 
      </>
        
    )
}

export default CampoPesquisa;
