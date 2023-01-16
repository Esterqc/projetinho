import { API_URL } from "./config";

import axios from 'axios';
const api = axios.create({
    baseURL:API_URL
});

export async function loginCliente(email,senha){
    const r = await api.post('/api/login',{email,senha})
    return r.data;
}

