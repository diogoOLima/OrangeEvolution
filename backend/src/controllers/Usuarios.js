import usuariosModel from "../models/usuariosModel";
import databaseUsuarios from "../DAO/databaseUsuarios";

databaseUsuarios.criarTabelaUsuarios();

class Usuarios {
    
    //listar todos usuarios
    static rotas(app) {                                  
        app.get("/usuarios", async (req, res)=>{
            const resposta = await databaseUsuarios.listarTodosUsuarios();
            res.status(200).json(resposta)
        });

        //listar por id
        app.get("/usuarios/:id", async(req, res) => {
            try {
                const usuario = await databaseUsuarios.listarUsuarioPorId(req.params.id);
                if(!usuario) {
                    throw new Error("Usuário não encontrado para este Id!")
                }
                res.status(200).json(usuario);
            } catch(error) {
                res.status(404).json(error.message);
            }
        });

        //inserir usuario
        app.post("/usuarios", async(req, res)=> {
            try {
                const usuario = new usuariosModel(...Object.values(req.body));
                const resposta = await databaseUsuarios.inserirUsuario(usuario);
                res.status(201).json(resposta);
            } catch(error) {
                res.status(400).json(error.message)
            }
        });

        //listar por id
        app.put("/usuarios/:id", async(req,res)=> {
            try {
                const usuarioId = await databaseUsuarios.listarUsuarioPorId(req.params.id);
                if(!usuarioId) {
                    throw new Error("Usuário não encontrado para esse Id.")
                }
                const usuario = new usuariosModel(...Object.values(req.body));
                const resposta = await databaseUsuarios.atualizarUsuarioPorId(req.params.id, usuario);
                res.status(200).json(resposta);
            }catch (error) {
                res.status(400).json(error.message);
              }
        });

        //deletar por id
        app.delete("/usuarios/:id", async(req,res)=> {
            try {
                const usuarioId = await databaseUsuarios.listarUsuarioPorId(req.params.id);
                if(!usuarioId) {
                    throw new Error("Usuário não encontrado para esse Id.")
                }
                const usuario = await databaseUsuarios.deletarUsuarioPorId(req.params.id);
                res.status(200).json(usuario);
            }catch (error) {
                console.log(error);
                res.status(404).json({ Error: error.message });
              }
        });
    }
}

export default Usuarios;