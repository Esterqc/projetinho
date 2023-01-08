




import './index.scss'
import Logo from '../../assets/logo.png'
import {useNavigate} from "react-router-dom";


export default function Cabecalho() {

    const navigate = useNavigate('');



    return(

 <div className= "faixa">
 <img  className='logo' src={Logo} alt='logo' onClick={() => navigate('/')}/>

 <div className="botao">
    <button className="botao-painel" onClick={() => navigate('/TelaCadastro')}>Voltar</button>
 </div>
</div>


    )
}