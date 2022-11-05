import DAO from "./DAO.js";

class databaseAulas extends DAO {

    static async criarTabelaAulas() {
        const query = `CREATE TABLE IF NOT EXISTS aulas(
                        aula_id INTEGER PRIMARY KEY AUTOINCREMENT,
                        nomeAula VARCHAR UNIQUE NOT NULL,
                        link VARCHAR NOT NULL,
                        nomeTrilha VARCHAR NOT NULL,
                        FOREIGN KEY (nomeTrilha) REFERENCES trilhas (nomeTrilha)
                        )`;
        const resposta = await this.criarTabela(query);
        return resposta;
    }

    static async inserirAula(aula) {
        const query = `INSERT INTO aulas (nomeAula, link, nomeTrilha) VALUES (?, ?, ?)`;
        const resposta = await this.inserir(aula, query);
        return resposta
    }

    static async listarTodasAulas() {
        const query = `SELECT * FROM aulas`;
        const resposta = await this.listarTodos(query);
        return resposta;
      }
      static async listarAulasPorId(id) {
        const query = `SELECT * FROM aulas WHERE aula_id = ?`;
        const resposta = await this.listarPorId(id, query);
        return resposta;
      }

      static async deletarAulaPorId(id) {
        const query = `DELETE FROM aulas WHERE aula_id = ?`;
        const resposta = await this.deletarPorId(id, query);
        return resposta;
      }
      static async atualizarAulaPorId(id, aula) {
        const query = `UPDATE aulas
        SET nomeAula = ?,
            link = ?,
            nomeTrilha = ?,
            WHERE aula_id = ?`;
        const resposta = await this.atualizarPorId(aula, id, query);
        return resposta;
      }
}

export default databaseAulas;