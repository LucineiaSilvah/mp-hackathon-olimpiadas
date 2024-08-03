import styles from './CamposPesquisa.module.css'
import lupa from '/src/assets/img/lupa.png'
import {useState} from 'react'
const CampoPesquisa = ({v,onChange,onClick}) => {

const [valor,setValor]= useState('');

const  handleValorChange = ()=>{
  setValor(onChange)
}



    return(
       <div className={styles.CampoPesquisa}>
           <input type="search"
           value={v} 
           onChange={onChange}
            id="pesquisar"
            placeholder="Ex: BRA, JPN"
            /> <img onClick={onClick} width="30px" src={lupa} alt=""/>
           
       </div>
        
    )
}

export default CampoPesquisa;