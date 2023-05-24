
//Criando tabela
CREATE TABLE usuarios(

    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT

);
//Inserindo dados na tabela
INSERT INTO usuarios(nome,email,idade) VALUES(

    "Andreza",
    "andreza@gmail.com",
    15
);
//Selecionando usuarios especifico

SELECT * FROM usuarios WHERE idade =8;

//estamos pegando a cima usuarios que tenham idade igual a 8 anos de idade.

SELECT * FROM usuarios WHERE nome = "Andreza";

//Selecionando com condição

SELECT * FROM usuarios WHERE idade >= 10;

//Deletando dados da tabela

DELETE FROM usuarios WHERE nome = "David Maciel";

//Atualizando registros da tabela

UPDATE usuarios SET nome = "Andreza Bernardo" WHERE nome = "Andreza";