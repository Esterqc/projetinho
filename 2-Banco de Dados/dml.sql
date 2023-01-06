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
    and ds_senha                   = 123456789