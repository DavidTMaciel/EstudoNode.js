var http = require('http');

http.createServer(function(req,res ){

    res.end("Ola")

}).listen(8081);

console.log("Servidor rodando na pasta 8081");