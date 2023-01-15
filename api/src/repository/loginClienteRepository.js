import {con} from "./connection.js"

export async function login(email,senha){
    const comando =
    `  select 
    id_usuario      			id,
    ds_email	     			email,
    ds_senha		            senha
    from tb_login
    where 	ds_email    	       = ?
    and ds_senha                   = ?`

    const [registros] = await con.query(comando,[email,senha]);
    return registros [0];
}

export async function CadastroUsuario(inforCliente){
    const comando = 
    `INSERT INTO tb_usuario(nm_usuario, ds_email, nr_telefone, ds_senha) 
    value(?, ?, ? ,?)`

    const [resposta] = await con.query(comando, [inforCliente.nome, inforCliente.email, inforCliente.telefone, inforCliente.senha ]);
    inforCliente.id = resposta.insertId;

    return resposta;

    
}

export const ComentarDepoimento = async (dados) =>{
    const comando =
     `INSERT INTO TB_DEPOIMENTO(id_usuario, vl_depoimento, ds_comentario, dt_comentario)
     VALUES(?,?,?,?)`;

     const AtualData = new Date();
     const [linhas] = await (await con).query(comando, [dados.idUsuario, dados.avaliacao, dados.comentario, AtualData]);
     dados.idUsuario = linhas.insertId;
     return linhas;

     
}

export const ListarDepoimento = async ()=> {
    const comando = 
     `SELECT ID_DEPOIMENTOS AS ID,
     DS_COMENTARIO AS AVALIACAO,
     DS_EMAIL AS EMAIL,
     DT_COMENTARIO AS DATA 
     FROM TB_DEPOIMENTO 
     INNER JOIN TB_USUARIO ON TB_DEPOIMENTO.ID_USUARIO = TB_USUARIO`
     const [linhas] = await (await con).query(comando);
     return linhas ;
    }