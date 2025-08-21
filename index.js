
// npm install (nome) --save
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//
const conectaDB = require('./db');
const alunosRouter = require('./routes/alunos.routes'); //Rotas


const port = 3000;

const app = express();

app.use(express.json());

dotenv.config();

conectaDB(); //Fazendo a conexão com o Mongodb

app.get('/' , (req, res) =>{
    res.json({message: "hello world"});
});

//Rotas
app.use('/alunos', alunosRouter);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});