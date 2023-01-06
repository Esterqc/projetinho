CREATE DATABASE JLC;
USE JLC;
show tables;


create table tb_usuario(
  id_usuario         int primary key auto_increment,
  nm_usuario          varchar(100),
  ds_email            varchar(100),
  nr_telefone         varchar(100),
  ds_senha            varchar(100)
);

create table tb_login(
   id_login         int primary key auto_increment,
   id_usuario        int,
   ds_email            varchar(100),
   ds_senha            varchar(100)
);


create table tb_orcamento(
   id_orcamento         int primary key auto_increment,
     id_usuario         int,
   nm_usuario            varchar(100),
   ds_email              varchar(100),
   ds_cep                varchar(100),
   nr_casa               varchar(100),
   ds_complemento        varchar(100),
   ds_logradouro         varchar(100),
   ds_bairro             varchar(100),
   ds_cidade             varchar(100),
   ds_estado             varchar(100),
   nr_telefone           varchar(100),
   nr_telefone2          varchar(100)
);

create table tb_orcamento_info(
  
)






 







