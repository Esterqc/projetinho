
import './index.scss'

import { useNavigate, Link } from 'react-router-dom';

import Comentarios from '../../assets/comentarios.png'
import Rodapé from '../../components/rodapé/index.js'

import Img1 from '../../assets/img1.png'
import Img2 from '../../assets/img2.png'
import Img3 from '../../assets/img3.png'
import Img4 from '../../assets/img4.png'
import Img5 from '../../assets/img5.png'
import Img6 from '../../assets/img6.png'
import Img7 from '../../assets/img7.png'
import Img8 from '../../assets/img8.png'



import Cabecalho from '../../components/faixa'


export default function Home() {
    return(
   
        <section>

     <div className='Principal-Home'>
        <Cabecalho/>
        <div className='Direcionamentos'>
            <Link to='/'>Home</Link>
            <Link to='quemSomos'>Quem somos</Link>
            <Link to='/servicosqRealizamos'>Serviços que Realizamos</Link>
            <Link to='/FotosEtrabalhos'>Fotos</Link>
            <Link to='/AgendarOrcamento'>Orçamento</Link>
            <Link to='/LoginCliente'>Entrar</Link>

          </div>
          <div className='Carrossel'></div>
          
          <div className='Container2'>
          <p>Serviços Que Realizamos</p>

          <div className='Seletor'>
             <p className='seletores'>CONTRUÇÃO</p>
             <p className='seletores'>REFORMA EM GERAL</p>
             <p className='seletores'>PINTURA</p>
          </div>

          <div className='Imagens'>
          <img src={Img1} alt='imagem1'/>
          <img src={Img2} alt='imagem2'/>
          <img src={Img3} alt='imagem3'/>
          </div>
        </div>

        <div className='Container3'>

         <p className='Paragrafo'>Nossos Trabalhos</p>


         <div className='Imagens-Nossos-Trabalhos'>
         <img src={Img4} alt='imagem4'/>
          <img src={Img5} alt='imagem5'/>
          <img src={Img6} alt='imagem6'/>
          <img src={Img7} alt='imagem7'/>
          <img src={Img8} alt='imagem8'/>
         </div>

        </div>

        <div className='Container4'>

      
<p className='Paragrafo1'>Depoimentos dos Clientes
</p> 
    
    
<div className='Imagens-Depoimentos-dos-Clientes'>



<img src={Comentarios} alt='Comentarios'/>
<img src={Comentarios} alt='Comentarios'/>
<img src={Comentarios} alt='Comentarios'/>
<img src={Comentarios} alt='Comentarios'/>
<img src={Comentarios} alt='Comentarios'/>

</div>

 <div className='Mas-Depoimentos'>
 <button className='Mas-Depoimentos'>Mas Depoimentos...</button>
 </div>


</div>

   <Rodapé/>

        </div>

        
      
  
        </section>
        ) 
}
