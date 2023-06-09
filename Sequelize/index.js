
//Conectando a aplicação ao banco de dados;
const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemadecadastro','root', '3003',{
    host:"localhost",
    dialect:'mysql',
});

//Utilizando o sequelize.authenticate o pode ser passado duas funcção de verificação de conexão;
//Caso a conexão ocorra corretamente é chamado a função the();
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
    //Caso a conexão de errado, é chamado a funcão catch;
});

//Criando tabela utilizando MODELS, atravez da função define do sequelize.
const Postagem = sequelize.define('postagens',{
   titulo:{
    type: Sequelize.STRING,
   },
   conteudo:{
    type: Sequelize.TEXT,
   } 
});
//Função sync() sincroniza o objeto com o banco de dados & forca a criação da tabela = Usuario.sync({force: true});


//Criação da tabela usuarios;

const Usuario = sequelize.define('usuario',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
})


//Criando os dados da tabela postagem;
Postagem.create({
    titulo: 'ESPORTES',
    conteudo:'Tudo relacionado a esportes'
})

Usuario.create({
    nome:'David',
    sobrenome:'Maciel',
    idade: 23,
    email:'teste@example.com'
});
