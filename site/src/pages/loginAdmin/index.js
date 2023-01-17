
import './index.scss'

import Axios from 'axios'
import {useNavigate} from 'react-router-dom'

import ImgLogin from '../../assets/imgLogin.png'
import Cabecalho2 from '../../components/faixa2'
import { useState } from 'react'
import axios from 'axios'


export default function LoginAdmin() {
 
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');


    const navigate = useNavigate()

    async function EntrarClick() {
try{

      
    const Login = await axios.post('http://localhost:5000/api/login', {
        email: email,
        senha: senha
    });
   
        navigate('/TelaAdministrador');
    

  
} catch (err) {
  if(err.response.status === 401){
    setErro(err.response.data.erro);
  }
 
}

}

    return(
        
        <div className='Page-Login'>
            <Cabecalho2/>

               <div className='Container-Imagem'>
                  <img src={ImgLogin} alt='ImgLogin'/>
             </div>

             <div className="Container-Login">

                <p className='Paragrafo-Login'><h2>LOGIN</h2></p>

                <p className='Paragrafo-Email'>EMAIL :</p>
                <input className='Input-Email' value={email} onChange={e => setEmail(e.target.value)}></input>

                <p className='Paragrafo-Senha'>SENHA :</p>
                <input type="password" className='Input-Senha'  value={senha} onChange={e => setSenha(e.target.value)}></input>
                
                <button className='Entrar' onClick={EntrarClick}> ENTRAR</button>

                <hr className='Linha'/>

                <button className='Cancelar'><p>Cancelar</p></button>

                <div className='Erro'>
                    {erro}
                    </div>
             </div>


                
                 
            
            
            </div>
    )
}