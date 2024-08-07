/* eslint-disable react/prop-types */
import styles from './CamposPesquisa.module.css'
import lupa from '/src/assets/img/lupa.png'
import {useState} from 'react'
const CampoPesquisa = ({onPesquisa,onClick}) => {

const [valorInput,setValorInput]= useState('');

const  handleChange = (e)=>{
  setValorInput(e.target.value)
  
}

const  handleClick = ()=>{
  onPesquisa(valorInput.toUpperCase())
  
}

    return(
      <>
       
       <div className={styles.Campo}>
      
           <input className={styles.CampoPesquisa} type="search"
           value={valorInput} 
           onChange={handleChange}
            id="pesquisar"
            placeholder="Ex: BRA, JPN"
            /><button className={styles.Busca} onClick={handleClick}  type="button">  <img className={styles.Lupa} src={lupa} alt="imagem lupa"/></button>
            <button className={styles.Todos} onClick={onClick}>Todos</button>
       </div>
    
      
      </>
        
    )
}

export default CampoPesquisa;