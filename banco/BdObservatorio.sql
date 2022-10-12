#drop database observatorio;

create database observatorio character set utf8mb4 collate utf8mb4_unicode_ci;
use observatorio;

select * from imagens;

create table tbl_usuario(
   id_usuario integer auto_increment primary key,
   email varchar(60) not null,
   password varchar(20) not null,
   nome_usuario varchar(30) 
);
#drop table File;

create table imagens(
   id integer auto_increment primary key,
   image varchar(60) not null,
   createdAt datetime,
   updatedAt datetime
);
create table File(
   id integer auto_increment primary key,
   file varchar(60) not null,
   createdAt datetime,
   updatedAt datetime
);

select * from tbl_usuario;
select * from File;
select * from imagens;



#delete from imagens where id = 9;