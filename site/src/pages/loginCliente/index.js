
import './index.scss'
import Logo from '../../assets/logo.png'

export default function LoginCliente() {
    return (
        <main className="Page-User-Login">
          <header>
          <div className= "faixa">
          <img  className='logo' src={Logo} alt='logo'/>
        </div>
          </header>
          <header>
            <div className='fundo-login'>
                <div className='login'>
                  <div className='info-login'>
                    <h3 className= 'infoo'>Olá! Seja bem-vindo</h3>
                    <h6 className='informacao'>Informe seu e-mail e senha  para continuar</h6>
                    <div className='inputs'>
                   <div className="input">
                  <input type="text" placeholder="     E-mail" ></input>
          </div>
          </div>
          <div className="inputt">
            <input type="password" placeholder="      Senha  "></input>
         
                <button className = 'botao-entra'>CONTINUAR</button>
                <div className='linha'>
                   </div>
                   <div  className= 'info'>
                    <h3>Você ainda não tem uma conta?  Cadastre</h3>
                   
                   </div>
                </div>
                 </div>
                </div>
            </div>
          </header>

       
        </main>
      );
    }