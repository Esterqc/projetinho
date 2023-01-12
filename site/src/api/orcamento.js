import { API_URL } from "./config";

import axios from "axios";
const api = axios.create({
    baseURL:API_URL
});

export const  Orçamento = async (idUsuario,nome,email,cep,numero,complemento,logradouro,bairro,cidade,estado,telefone,telefone2) =>{
    const r = await api.post(`/api/orcamento/${idUsuario}`,{nome,email,email,cep,numero,complemento,logradouro,bairro,cidade,estado,telefone,telefone2});

    return r.data;
}


