
import './index.scss'
import Faixa2 from '../../components/faixa2'

export default function TelaDepoimentos() {
    return(
        <div className='Page-Depoimentos'>
        <div> 
            <Faixa2/>
            <h2 className='Deixe-Seu-Depoimento'>DEIXE SEU DEPOIMENTO</h2>
            
            <div className='Container-informacoes'>

                <p className='Informe-Nome'>INFORME O NOME :</p>

                <input className='Caixa-Nome'></input>

             <div className='Container-Positivo-Negativo'>
                   <label>
                <input type="checkbox" name="fruta" />
                POSITIVO
                    </label>

                     <label>
                <input type="checkbox" name="fruta" />
                NEGATIVO
                    </label>
               </div> 

               <h2 className='Deixe-Seu-Depoimento'>DESCREVA O SEU DEPOIMENTO...</h2>
   
               <input className='Caixa-Depoimento'></input>

              <button className='Botao'>ENVIAR DEPOIMENTO</button>



                         
                    

                </div>
            </div>
        </div>
    )
}

