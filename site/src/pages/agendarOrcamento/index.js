
import './index.scss'
import Cabecalho2 from '../../components/faixa2'
import { useEffect, useState,useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import storage from   'local-storage';
import LoadingBar from 'react-top-loading-bar';
import { Orçamento } from '../../api/orcamento';

export default function AgendarOrcamento() {
  const[nome,setNome] = useState('');
  const[email,setEmail] = useState('');
  const[cep,setCep] = useState('');
  const[numero,setNumero] = useState('');
  const[complemento,setComplemento] = useState('');
  const[logradouro,setLogradouro] = useState('');
  const[bairro,setBairro] = useState('');
  const[cidade,setCidade] = useState('');
  const[estado,setEstado] = useState('');
  const[telefone,setTelefone] = useState('');
  const[telefone2,setTelefone2] = useState('');
  const[usuario,setUsuario] = useState({id:0,nome:''})
  const [carregando,setCarregando] = useState(false);

  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() =>{
    if(storage('usuario-logado')){
        const UsuarioLogado = storage('usuario-logado');
        setUsuario({id:UsuarioLogado.id, nome:UsuarioLogado.nome});
    }
  })


  const FazerOrcamentos = async _ =>{
    try{
        const r = await Orçamento(usuario.id,nome,email,cep,numero,complemento,logradouro,bairro,cidade,estado,telefone,telefone2);
        alert('informações salva com sucesso,clique em continuar para ir para próxima etapa')

        setTimeout(()=>{
            navigate('/AgendarOrcamento')
        },4000 )

    } catch (err) {
        alert(err.response.data.erro);
        
    }
};


const continuar = async _ =>{
     try{
         const r = await Orçamento(usuario.id,nome,email,cep,numero,complemento,logradouro,bairro,cidade,estado,telefone,telefone2);
         
 
         setTimeout(()=>{
             navigate('/TelaOrcamento')
         },4000 )
 
     } catch (err) {
         alert(err.response.data.erro);
         
     }
 };

 

    return(
        <main className= "pager-orcamento">
        <LoadingBar color='#987F5B' ref={ref} />
          <div className="faixa">
            <Cabecalho2/>
            </div>  
            <div className='faixa-azul'>

            <div className='faixa4'>
            <div className='informaçao'>
                <div className='pp'>
                    <p className='p'>Início » Orçamento Online</p>
                </div>
                
                <h1 className='textoss'>Seu orçamento está a 2 passos de ser concluído</h1>
                <h2 className='texto1'>Preencha seus dados pessoais para dar andamento ao seu orçamento.</h2>
              
            </div>
            </div>

                <section className='input'>

            <div className ='nome'>
                 <label className='p-nome'>Nome Completo</label>
            <input className='p-input' name='nome' id= "nome" onChange={e => setNome(e.target.value)}></input>

                 </div>

                 <div className ='email-p'>
                 <label className='mail'>E-mail</label>
            <input className='input-email' name='email' id= "email" onChange={e => setEmail(e.target.value)}></input>

                 </div>


              
                 <div className ='igual'>
                 <label className='igu' >CEP</label>
            <input className='input-cep' name='cep' id= "cep" onChange={e => setCep(e.target.value)}></input>
            </div>
             
            <div className ='nume'>
                 <label className='numero'>Número</label>
            <input className='input-numero' name='nume' id= "nume" onChange={e => setNumero(e.target.value)}></input>
            </div>

            <div className ='compl'>
                 <label className='complemento'>Complemento</label>
            <input className='input-complemento' name='compl' id= "compl" onChange={e => setComplemento(e.target.value)}></input>
            </div>

            <div className ='logra'>
                 <label className='logradouro'>Logradouro</label>
            <input className='input-logradouro' name='logra' id= "logra" onChange={e => setLogradouro(e.target.value)}></input>
            </div>

            <div className ='bair'>
                 <label className='bairro'>Bairro</label>
            <input className='input-bairro' name='bairr' id= "bairr" onChange={e => setBairro(e.target.value)}></input>
            </div>

            <div className ='cida'>
                 <label className='cidade'>Cidade</label>
            <input className='input-cidade' name='cidad' id= "cidad" onChange={e => setCidade(e.target.value)}></input>
            </div>

            <div className ='U'>
                 <label className='UF'>UF</label>
            <input className='input-UF' name='UF' id= "UF" onChange={e => setEstado(e.target.value)}></input>
            </div>

            <div className ='Tele'>
                 <label className='Telefone'>Telefone principal (Preferencialmente com WhatsApp)</label>
            <input className='input-Telefone' name='telefone' placeholder='(xx) xxxx-xxxx' id= "telefone" onChange={e => setTelefone(e.target.value)}></input>
            </div>

            <div className ='Celu'>
                 <label className='Celular'>Telefone Secundário</label>
            <input className='input-Celular' name='telefone' placeholder='(xx) xxxx-xxxx' id= "Celular" onChange={e => setTelefone2(e.target.value)}></input>
            </div>


                 </section>

                 <div className='avanca'>
            <button className = 'entra'  onClick={FazerOrcamentos} >  Salvar    </button>
            <button className = 'conti'  onClick={continuar} >  continuar   ❯</button>
            </div>

              



                </div>
              
        </main>
    )
}