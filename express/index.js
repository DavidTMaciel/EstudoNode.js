import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

//Na nova versão a forma correta de usar o __dirname é essa abaixo
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Rotas
app.get('/', (req, res) => {

    res.sendFile(__dirname+'/pag/index.html');
});
app.get('/sobre', (req, res) => {
    res.send('Pagina Sobre');
});
app.get('/blog', (req, res) => {
    res.send('Bem vindo ao Blog');
});

//rota com parametro

app.get('/ola/:nome/:cargo', (req, res) => {
    
    res.send("<h1>Ola "+req.params.nome+"</h1><br/>"+
    "<h2> Seu cargo e: " + req.params.cargo +"</h2>")
    
});

//Abrindo o servidor
app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});

