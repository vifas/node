const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Ola maluco");
});

app.get("/sobre",function(req,res){
    res.send("Pagina sobre");
})

app.get("/blog", function(req,res){
    res.send("Bem-vindo ao meu blog!");
});

app.get('/ola/:nome/:cargo', function(req,res){
    res.send("<h1>Oia "+req.params.nome+"</h1>"+"<h2> Seu cargo e: "+req.params.cargo+"</h2>");
    
})

app.listen(8081, function(){
    console.log("Servidor rodando");
});