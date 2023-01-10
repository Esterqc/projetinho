import { Orcamento } from "../repository/OrcamentoRepository.js";

import { Router } from "express";
const server =Router();

server.post('/api/orcamento/:idUsuario',async(req,resp)=>{
    try{
      const idUsuario = req.params.idUsuario;
      const orcamentos = req.body;

      if(!idUsuario)
      throw new Error('Usuario Invalido');

      if(!orcamentos.nome)
      throw new Error('Informe Seu Nome');

      if(!orcamentos.email)
      throw new Error('Informe Seu E-mail para continuar');

      if(!orcamentos.cep)
      throw new Error('Cep não informado!');

      if(!orcamentos.numero)
      throw new Error('Informe o numero da residencia ');

      if(!orcamentos.complemento)
      throw new Error('informe o complemento ');

      if(!orcamentos.logradouro)
      throw new Error('logradouro não informado! ');

      if(!orcamentos.bairro)
      throw new Error('Bairro não informado!');

      if(!orcamentos.cidade)
      throw new Error('Cidade não informado! ');

      if(!orcamentos.estado)
      throw new Error('Estado não informado');

      if(!orcamentos.telefone)
      throw new Error('Informe seu Telefone ');

      if(!orcamentos.telefone2)
      throw new Error('Informe um numero para recado');

      const resposta  = await Orcamento (idUsuario,orcamentos);
      resp.send(resposta);

    } catch (err){
      resp.status(400).send({
        erro:err.message
      })
    }
});

export default server;