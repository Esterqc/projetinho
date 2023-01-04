
import './index.scss'

import { useNavigate, Link } from 'react-router-dom';
import Img1 from '../../assets/img1.png'
import Img2 from '../../assets/img2.png'
import Img3 from '../../assets/img3.png'


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
            <a>Entrar</a>
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

        
        </div>

        
      
  
        </section>
        ) 
}
