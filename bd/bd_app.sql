CREATE DATABASE UniversoDown; 

USE UniversoDown; 

CREATE TABLE Profissional (
	id_profissional INT PRIMARY KEY AUTO_INCREMENT, 
	nome_profissional VARCHAR(100), 
	profissao VARCHAR(50) 
); 


CREATE TABLE Atividade (
	id_atividade INT PRIMARY KEY AUTO_INCREMENT, 
	nome_atividade VARCHAR(50), 
	horario TIME, 
	id_profissional INT, 
	FOREIGN KEY (id_profissional) REFERENCES Profissional(id_profissional)
); 


CREATE TABLE Associado (
	id_associado INT PRIMARY KEY AUTO_INCREMENT, 
	nome_associado VARCHAR(100), 
	dta_nascimento DATE,
	idade_associado INT, 
	telefone VARCHAR(15), 
	nome_responsavel VARCHAR(100), 
	endereco VARCHAR(50), 
	bairro VARCHAR(50), 
	numero INT, 
	CEP INT, 
	observacoes VARCHAR(100), 
	atividade INT,  
	FOREIGN KEY (atividade) REFERENCES Atividade(id_atividade)
); 