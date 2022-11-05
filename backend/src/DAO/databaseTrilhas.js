import DAO from "./DAO.js";

class databaseTrilhas extends DAO {

    static async criarTabelaTrilhas() {
        const query = `CREATE TABLE IF NOT EXISTS trilhas(
                        trilha_id INTEGER PRIMARY KEY AUTOINCREMENT,
                        nomeTrilha VARCHAR UNIQUE NOT NULL,
                        tipoTrilha VARCHAR
                        )`;
        const resposta = await this.criarTabela(query);
        return resposta;
    }

    static async inserirTrilha(trilha) {
        const query = `INSERT INTO trilhas (nomeTrilha, tipoTrilha) VALUES (?, ?)`;
        const resposta = await this.inserir(trilha, query);
        return resposta
    }

    static async listarTodasTrilhas() {
        const query = `SELECT * FROM trilhas`;
        const resposta = await this.listarTodos(query);
        return resposta;
      }
      static async listarTrilhasPorId(id) {
        const query = `SELECT * FROM trilhas WHERE trilha_id = ?`;
        const resposta = await this.listarPorId(id, query);
        return resposta;
      }
      static async deletarTrilhaPorId(id) {
        const query = `DELETE FROM trilhas WHERE trilha_id = ?`;
        const resposta = await this.deletarPorId(id, query);
        return resposta;
      }
      static async atualizarTrilhaPorId(id, trilha) {
        const query = `UPDATE trilhas
        SET nomeTrilha = ?,
             tipoTrilha = ?,
            WHERE trilha_id = ?`;
        const resposta = await this.atualizarPorId(trilha, id, query);
        return resposta;
      }
}

export default databaseTrilhas;