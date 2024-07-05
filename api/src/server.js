//Novo trecho do Projeto
require('dotenv').config({path:'variaveis.env'})

const express = require('express');
const cors = require ('cors ');
const bodyParser = requier('body-parser');

const routes = require('./route.js');

const server = express();
server.use(cors());
server.use(bodyParser.urlencode({extend: false}));
server.use('/api', routes);


server.listen(process.env.PORT, ()=>{
    console.log('servidor rodando com sucesso! http://localhost:$(process.env.PORT)');
});

/**
// Trecho original do Projeto
import express from "express"
import cors from "cors"
import db from "../config/database.js"

import profissionalRota from "../routes/profissional_router.js"
import atividadeRota from "../routes/atividade_router.js"
import associadoRota from "../routes/associado_router.js"

const server = express()
server.use(express.json())
server.use(cors())

try {
    await db.authenticate()
    console.log("Conexão com o MySql estabelecida")
} catch (erro) {
    console.log("Conexão com o MySql não estabelecida", erro)
}

server.use(profissionalRota, atividadeRota, associadoRota)
server.listen(3000, () => console.log("Servidor executando em http://localhost:3000"))
 */