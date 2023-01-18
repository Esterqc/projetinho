
import './index.scss'

import Faixa2 from '../../components/faixa2'
import Comentarios from '../../assets/comentarios.png'

export default function TelaAdminstrador() {
    return(
        < div className="Page-Administrador">
         <Faixa2/>
         
         <h2 className='Titulo'>DEPOIMENTO DOS CLIENTES</h2>

         <div className='Container-Depoimento'>

         <img src={Comentarios} alt='Comentarios'/>

         <p className='Paragrafo-Maria'>MARIA CLARA</p>
         <p className='Paragrafo-Maria'>POSITIVO, SERVIÇOS MUITO BRM FEITO,PERFEITO!!!</p>

         <button className='Botao-Publicar'><p className='Conteudo'>PUBLICAR</p></button>




         </div>


      <div className='Container-Depoimento'>

      <img src={Comentarios} alt='Comentarios'/>

<p className='Paragrafo-Maria'>ESTER QUEIROZ</p>
<p className='Paragrafo-Maria'>POSITIVO, SERVIÇOS MUITO BRM FEITO,PERFEITO!!!</p>

<button className='Botao-Publicar'><p className='Conteudo'>PUBLICAR</p></button>
        </div>

</div>


    )
}