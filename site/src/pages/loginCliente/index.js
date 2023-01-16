
import './index.scss'
import Logo from '../../assets/logo.png'

import { Link } from 'react-router-dom';
import Cabecalho2 from '../../components/faixa2'
import {useNavigate} from "react-router-dom";
import storage from   'local-storage';


import LoadingBar from 'react-top-loading-bar';
import  { useState,useRef,useEffect } from 'react';
import { loginCliente } from '../../api/loginCliente';

export default function LoginCliente() {

  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');
  const [erro,setErro] = useState('');
  const [carregando,setCarregando] = useState(false);

  const navigate = useNavigate('');
  const ref = useRef();

  useEffect(()=>{
    storage.remove('usuario-logado');
}, []);

useEffect(()=>{
  if(storage('usuario-logado'));
      navigate('/loginCliente')
}, []);
  

  const logaCliente= async () =>{
    ref.current.continuousStart();
    setCarregando(true);


    try{
      const resp = await loginCliente(email,senha)
      storage('usuario-logado', resp);
               setTimeout(() =>{
                navigate ("/")
               }, 3000);
    }
    catch (err) {
      ref.current.complete();
      setCarregando(false);

      if(err.response.status ===401){
        setErro(err.response.data.erro);
      }
    }

  }

    return (
        <main className="Page-User-Login">
          <LoadingBar color='#987F5B' ref={ref} />
          <header>
          <Cabecalho2/>
          </header>
          <header>
            <div className='fundo-login'>
                <div className='login'>
                  <div className='info-login'>
                    <h3 className= 'infoo'>Olá! Seja bem-vindo</h3>
                    <h6 className='informacao'>Informe seu e-mail e senha  para continuar</h6>
                    <div className='inputs'>
                   <div className="input">
                  <input type="text" placeholder="     E-mail" value={email} onChange={e  => setEmail(e.target.value)}></input>
          </div>
          </div>
          <div className="inputt">
            <input type="password" placeholder="      Senha  "  value={senha} onChange={e  => setSenha(e.target.value)}></input>
         
                <button className = 'botao-entra' onClick={ logaCliente}>CONTINUAR</button>
                <div className='linha'>
                   </div>
                   <div  className= 'info' onClick={() => navigate('/TelaCadastro')}>
                    <h3>Você ainda não tem uma conta?  <Link to='/TelaCadastro'>Cadastre-se</Link></h3>
                    <p className='erro'>{erro}</p>
                   </div>
                  
                </div>
                 </div>
                </div>
            </div>
          </header>

       
        </main>
      );
    }