import {login,CadastroUsuario, ListarDepoimento, ComentarDepoimento} from "../repository/loginClienteRepository.js";

import { Router } from "express";
const server = Router();

server.post('/api/login', async (req,resp) =>{
    try{
        const {email,senha} = req.body;

        const r = await login(email,senha);
        if(!r){
            throw new Error('E-mail Ou Senha Invalidos');
        }
        resp.send({
            id: r.id,
            nome: r.nome
        })
    }
    catch (err){
        resp.status(401).send({
            erro:err.message
        })
    }

})

server.post ('/usuario',  async (req, resp) =>{
    try{
        const inforCliente = req.body;

          if(!inforCliente.nome)
          throw new Error('SEU NOME NÃO FOI CONFIRMADO!!');

          if(!inforCliente.email)
          throw new Error('SEU EMAIL NÃO FOI CONFIRMADO!!!');

          if(!inforCliente.telefone)
          throw new Error('SEU TELEFONE NÃO FOI CONFIRMADO!!');

          if(!inforCliente.senha)
          throw new Error('SUA SENHA NÃO FOI CONFIRMADA');

          const resposta = await CadastroUsuario(inforCliente);
          resp.send(resposta)

    
    }catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }

});

        
     server.get('/depoimentos', async (req, resp) => {
        try{
            const r = await ListarDepoimento();

            resp.send(r);
        }catch (err){
            resp.status(400).send({
                erro: err.message
            })
        }
     })
     
    server.post('/usuario/depoimento/', async (req,resp) => {
        try{
             const dados = req.body;

             if(!dados.comentario)
             throw new Error('OPIS,COMENTARIOS NÃO INFORMADO!!!');

             if(!dados.avaliacao)
             throw new Error('OPIS, AVALIACAO NÃO INFORMADA!!!')

             const r = await ComentarDepoimento(dados);
             resp.send(r);

            }catch (err) {
                resp.status(400).send({
                    erro: err.message
                })
            }
           


    })


    


export default server;