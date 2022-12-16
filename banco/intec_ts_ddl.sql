#drop database intec;
create database intec character set utf8mb4 collate utf8mb4_unicode_ci;

use intec;

create table cursos(
   id_curso integer auto_increment primary key,
   nome_curso varchar(40) not null,
   periodo enum('Manhã','Tarde','Noite')
);

create table professor(
	id_professor integer auto_increment primary key,
    nome_professor varchar(40) not null,
    RM varchar(5) not null
);

create table coordenador(
	id_coordenador integer auto_increment primary key,
    curso_coordenado int not null,
    coordenador int not null,
    constraint fk_curso_coordenado foreign key (curso_coordenado) references cursos(id_curso),
    constraint fk_professor_cord foreign key (coordenador) references professor(id_professor)
);

create table turmas(
	id_turma integer auto_increment primary key,
	modulo enum('1','2','3'),
    curso_turma int not null,
    constraint fk_curso foreign key (curso_turma) references cursos(id_curso)
);

create table observatorio(
	id_observatorio integer	auto_increment primary key,
    nome_observatorio varchar(50) not null,
    curso_observatorio int not null,
    constraint fk_curso_observatorio foreign key (curso_observatorio) references cursos(id_curso)
);
create table imagens_obs(
	id_imagem_observatorio integer	auto_increment primary key,
    image varchar(60) not null,
	observatorio_pertencente int,
    constraint fk_observatorio_pertencente foreign key (observatorio_pertencente) references observatorio(id_observatorio)
);

