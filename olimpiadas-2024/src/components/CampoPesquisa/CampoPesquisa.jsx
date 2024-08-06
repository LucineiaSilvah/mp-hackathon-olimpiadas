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
       
       <div className={styles.CampoPesquisa}>
      
           <input type="search"
           value={valorInput} 
           onChange={handleChange}
            id="pesquisar"
            placeholder="Ex: BRA, JPN"
            /> <img onClick={handleClick} width="30px" src={lupa} alt=""/>
            <button className={styles.Todos} onClick={onClick}>Todos</button>
       </div>
    
      
      </>
        
    )
}

export default CampoPesquisa;