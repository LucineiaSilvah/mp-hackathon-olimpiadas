/* eslint-disable react/prop-types */
import styles from './CamposPesquisa.module.css'
import lupa from '/src/assets/img/lupa.png'
import {useState} from 'react'
const CampoPesquisa = ({onPesquisa}) => {

const [valorInput,setValorInput]= useState('');

const  handleChange = (e)=>{
  setValorInput(e.target.value)
  
}

const  handleClick = ()=>{
  onPesquisa(valorInput)
  
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
           
       </div>
      
      </>
        
    )
}

export default CampoPesquisa;