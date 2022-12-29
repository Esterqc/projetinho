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