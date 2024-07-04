import express from "express"
import cors from "cors"
import db from "./config/database.js"

import profissionalRota from "./routes/profissional_router.js"
import atividadeRota from "./routes/atividade_router.js"
import associadoRota from "./routes/associado_router.js"

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