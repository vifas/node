const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Oia");
});

app.get("/sobre",function(req,res){
    res.send("Pagina sobre");
})

app.get("/blog", function(req,res){
    res.send("Bem-vindo ao meu blog!");
})

app.listen(8081, function(){
    console.log("Servidor rodando");
});