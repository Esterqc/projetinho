
import './index.scss'
import Cabecalho2 from '../../components/faixa2'


export default function AgendarOrcamento() {
    return(
        <main className= "pager-orcamento">
          <div className="faixa">
            <Cabecalho2/>
            </div>  
            <div className='faixa-azul'>

            <div className='faixa4'>
            <div className='informaçao'>
                <div className='pp'>
                    <p className='p'>Início » Orçamento Online</p>
                </div>
                <div className='texto'>
                <h1 className='textoss'>Seu orçamento está a 2 passos de ser concluído</h1>
                <h2 className='texto1'>Preencha seus dados pessoais para dar andamento ao seu orçamento.</h2>
                </div>
            </div>
            </div>

                <section className='input'>

            <div className ='nome'>
                 <label className='p-nome'>Nome Completo</label>
            <input className='p-input' name='nome' id= "nome"></input>

                 </div>

                 <div className ='email-p'>
                 <label className='mail'>E-mail</label>
            <input className='input-email' name='email' id= "email"></input>

                 </div>


              
                 <div className ='igual'>
                 <label className='igu'>CEP</label>
            <input className='input-cep' name='cep' id= "cep"></input>
            </div>
             
            <div className ='nume'>
                 <label className='numero'>Número</label>
            <input className='input-numero' name='nume' id= "nume"></input>
            </div>

            <div className ='compl'>
                 <label className='complemento'>Complemento</label>
            <input className='input-complemento' name='compl' id= "compl"></input>
            </div>

            <div className ='logra'>
                 <label className='logradouro'>Logradouro</label>
            <input className='input-logradouro' name='logra' id= "logra"></input>
            </div>

            <div className ='bair'>
                 <label className='bairro'>Bairro</label>
            <input className='input-bairro' name='bairr' id= "bairr"></input>
            </div>

            <div className ='cida'>
                 <label className='cidade'>Bairro</label>
            <input className='input-cidade' name='cidad' id= "cidad"></input>
            </div>

            <div className ='U'>
                 <label className='UF'>UF</label>
            <input className='input-UF' name='UF' id= "UF"></input>
            </div>

            <div className ='Tele'>
                 <label className='Telefone'>Telefone principal (Preferencialmente com WhatsApp)</label>
            <input className='input-Telefone' name='telefone' placeholder='(xx) xxxx-xxxx' id= "telefone"></input>
            </div>

            <div className ='Celu'>
                 <label className='Celular'>Telefone Secundário</label>
            <input className='input-Celular' name='telefone' placeholder='(xx) xxxx-xxxx' id= "Celular"></input>
            </div>


                 </section>

                 <div className='avanca'>
            <button className = 'entra'>AVANÇAR   ❯</button>
            </div>

              



                </div>
              
        </main>
    )
}