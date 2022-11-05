import trilhasModel from "../models/trilhasModel.js";
import databaseTrilhas from "../DAO/databaseTrilhas.js"

databaseTrilhas.criarTabelaTrilhas();

class Trilhas {
    
    //listar todas trilhas
    static rotas(app) {                                  
        app.get("/trilhas", async (req, res)=>{
            const resposta = await databaseTrilhas.listarTodasTrilhas();
            res.status(200).json(resposta)
        });

        //listar por id
        app.get("/trilhas/:id", async(req, res) => {
            try {
                const trilhas = await databaseTrilhas.listarTrilhasPorId(req.params.id);
                if(!trilhas) {
                    throw new Error("Trilha não encontrado para este Id!")
                }
                res.status(200).json(trilhas);
            } catch(error) {
                res.status(404).json(error.message);
            }
        });

        //inserir usuario
        app.post("/trilhas", async(req, res)=> {
            try {
                const trilhas = new trilhasModel(...Object.values(req.body));
                const resposta = await databaseTrilhas.inserirTrilha(trilhas);
                res.status(201).json(resposta);
            } catch(error) {
                res.status(400).json(error.message)
            }
        });

        //listar por id
        app.put("/trilhas/:id", async(req,res)=> {
            try {
                const trilhaId = await databaseTrilhas.listarTrilhasPorId(req.params.id);
                if(!trilhaId) {
                    throw new Error("Trilha não encontrada para esse Id.")
                }
                const trilhas = new trilhasModel(...Object.values(req.body));
                const resposta = await databaseTrilhas.atualizarTrilhaPorId(req.params.id, trilhas);
                res.status(200).json(resposta);
            } catch (error) {
                res.status(400).json(error.message);
              }
        });

        //deletar por id
        app.delete("/trilhas/:id", async(req,res)=> {
            try {
                const trilhaId = await databaseTrilhas.listarTrilhasPorId(req.params.id);
                if(!trilhaId) {
                    throw new Error("Trilha não encontrada para esse Id.")
                }
                const trilha = await databaseTrilhas.deletarTrilhaPorId(req.params.id);
                res.status(200).json(trilha);
            }catch (error) {    
                res.status(404).json({ Error: error.message });
              }
        });
    }
}

export default Trilhas;