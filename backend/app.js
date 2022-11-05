import express  from "express";
import * as dotenv from "dotenv";
import Usuarios from './src/controllers/Usuarios.js';
import Trilhas from "./src/controllers/Trilhas.js";

dotenv.config();

const porta = process.env.PORT || 3000
const app = express()

app.listen(porta, ()=> {
    console.log(`Servidor rodando em http://localhost:${porta}`)
});

app.use(express.json());

Usuarios.rotas(app);
Trilhas.rotas(app);