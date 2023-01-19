

USE JLC;

insert into  tb_usuario (nm_usuario,ds_email,nr_telefone,ds_senha)
		values ("Ester Queiroz","esterq292@gmail.com","1195919-5154","123456789");
        
        insert into  tb_usuario (nm_usuario,ds_email,nr_telefone,ds_senha)
		values ("Maria Clara","Mabentarosa@gmail.com","1199877-5654","123456789");
        
select * from tb_usuario;

insert into  tb_login(id_usuario,ds_email, ds_senha )
            value("1","esterq292@gmail.com","123456789");
            
            insert into  tb_login(id_usuario,ds_email, ds_senha )
            value("2","Mabentarosa@gmail.com","123456789");
            
	select * from tb_login;
    
    select 
    id_usuario      			id,
    ds_email	     			email,
    ds_senha		            senha
    from tb_login
    where 	ds_email    	       = 'esterq292@gmail.com'
    and ds_senha                   = 123456789;
    
    
    select id_depoimento,
    nm_usuario,
    vl_depoimento,
    ds_email,
    ds_comentario,
    dt_comentario
    from tb_depoimento
    inner join tb_usuario on tb_depoimento.id_usuario = tb_usuario.id_usuario;
    
    
    insert into tb_depoimento(id_usuario, vl_depoimento, ds_comentario, dt_comentario)
    values( 1,'Maria', 'Maria','2005-11-22' );
    
/* ALTERAR ORCAMENTO */
    
    UPDATE TB_ORCAMENTO
     SET NM_USUARIO = 'Maria Clara',
     DS_EMAIL = 'Mabentarosa@gmail.com',
     DS_CEP = '048.90.480',
     NR_CASA = '82',
     DS_COMPLEMENTO = 'Final da rua',
     DS_LOGRADOURO = 'São Paulo',
     DS_BAIRRO = 'Parelheiros',
     DS_CIDADE = 'São Paulo',
     DS_ESTADO = 'São Paulo',
     NR_TELEFONE = ' 11 932734267',
     NR_TELEFONE2 = ' 11 933649867'
WHERE ID_ORCAMENTO = 1;

/* DELETAR ORCAMENTO */

DELETE FROM TB_ORCAMENTO
   WHERE ID_ORCAMENTO = 1;

   /* CONSULTAR TODOS ORCAMENTOS */
   
    SELECT NM_USUARIO  NOME,
           DS_EMAIL EMAIL,
           DS_CEP  CEP,
           NR_CASA CASA,
           DS_COMPLEMENTO  COMPLEMENTO,
           DS_LOGRADOURO LOGRADOURO,
           DS_BAIRRO  BAIRRO,
           DS_CIDADE  CIDADE,
           DS_ESTADO  ESTADO,
           NR_TELEFONE TELEFONE,
           NR_TELEFONE2  TELEFONE2
     FROM TB_ORCAMENTO; 

          
   
   
   
   

   
   



