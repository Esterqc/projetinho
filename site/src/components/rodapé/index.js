
import './index.scss'

import Logo from '../../assets/logo.png'
import Email from '../../assets/email.png'
import Instagram from '../../assets/intagram.png'
import Whatsapp from '../../assets/whatsapp.png'



export default function Rodape() {
    return(
        
      <div className='Principal-Rodape'>

       <div className='Primeiro-Container-Rodape'>
            <img  className='Logo-Rodape' src={Logo} alt='Logo-Rodape'/>
             
        <div className='Direcionar-Rodape'>
             <h5 className='Home'>HOME</h5>
             <h5  className='Quem-Somos'>QUEM SOMOS</h5>
             <h5 className='Nossos-Servicos'>NOSSOS SERVIÇOS</h5>
         </div>  

             <div className='Icones'>
                   <img src={Email} alt='Email'/>
                   <img src={Whatsapp} alt='Whatsapp'/>
                   <img src={Instagram} alt='Instagram'/>
                 
           </div>
           <hr className='Linha'/>
      
      <div className='Informacoes'>
         <h5>(11)60500-5506</h5>
         <h5>lucielcontrucao@gmail.com</h5>
         <h5>luciel_contrucao</h5>
      </div>
  
    </div>
    
         </div>
         
      

      
    )
}