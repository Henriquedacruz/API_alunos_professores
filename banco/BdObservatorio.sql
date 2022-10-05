#drop database observatorio;

create database observatorio character set utf8mb4 collate utf8mb4_unicode_ci;
use observatorio;

select * from observatorio.imagens;

create table tbl_usuario(
   id_usuario integer auto_increment primary key,
   email varchar(60) not null,
   senha varchar(20) not null,
   nome_usuario varchar(30) not null
);

select * from tbl_usuario;

#delete from imagens where id = 9;