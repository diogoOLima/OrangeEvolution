import express  from "express";
import * as dotenv from "dotenv";
import Usuarios from "../src/controllers/Usuarios";

dotenv.config();

const porta = process.env.PORT || 3000
const app = express()

app.listen(porta, ()=> {
    console.log(`Servidor rodando em http://localhost:${porta}`)
});

app.use(express.json());

Usuarios.rotas(app);