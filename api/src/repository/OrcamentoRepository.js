import {con} from './connection.js';

export async function Orcamento(idUsuario,orcamentos){
    const comando =
    `insert into  tb_orcamento ( id_usuario,
        nm_usuario,
        ds_email,
        ds_cep,
        nr_casa,
        ds_complemento,
        ds_logradouro,
        ds_bairro,
        ds_cidade,
        ds_estado,
        nr_telefone,
        nr_telefone2)

values(?,?,?,?,?,?,?,?,?,?,?,?);
                    
               `
const [resposta] = await con.query(comando,[idUsuario,orcamentos.nome,orcamentos.email,orcamentos.cep,orcamentos.numero,orcamentos.complemento,orcamentos.logradouro,orcamentos.bairro,orcamentos.cidade,orcamentos.estado,orcamentos.telefone,orcamentos.telefone2])
orcamentos.id = resposta.insertId;
return resposta;
}
