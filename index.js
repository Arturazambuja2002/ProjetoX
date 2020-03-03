const express = require('express');
var app = express();
var bodyparser = require('body-parser');
var Produto = require('./model/produtos')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.set('view engine','ejs');
/////////////////////////////////
app.get('/',function(req,res){
    res.render('listar.ejs', {})
})


app.get('/add',function(req,res){
    res.render('adicionar.ejs', {})
})
app.post('/add',function(req,res){
    var produto = new Produto({
        nome: req.body.nome,
        codigo: req.body.CodBarra,
        preco: req.body.preco
    })
    produto.save(function(err){
        if(err){
            res.render('listar.ejs', {erro : err})
        }else{
            res.render('listar.ejs', {msg : "Salvo com Sucesso!"})
        }
    });
})


app.get('/editar',function(req,res){
    res.render('editar.ejs', {})
})
/////////////////////////////////
app.listen(3001,function(){
    console.log("Estou escutando na porta 3001!")
})