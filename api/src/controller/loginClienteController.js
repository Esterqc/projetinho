import {login} from "../repository/loginClienteRepository.js";

import { Router } from "express";
const server = Router();

server.post('/api/login', async (req,resp) =>{
    try{
        const {email,senha} = req.body;

        const r = await login(email,senha);
        if(!r){
            throw new Error('email ou senha erradas');
        }
        resp.send({
            id: r.id,
            nome: r.nome
        })
    }
    catch (err){
        resp.status(400).send({
            erro:err.message
        })
    }

})

export default server;