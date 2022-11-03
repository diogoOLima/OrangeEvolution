import DAO from "./DAO";

class databaseUsuarios extends DAO {

    static async criarTabelaUsuarios() {
        const query = `CREATE TABLE IF NOT EXISTS usuarios(
                        id INTEGER PRIMARY KEY AUTOINCREMENT
                        usuario VARCHAR,
                        senha VARCHAR,
                        isAdmin BIT NOT NULL

                        )`;
        const resposta = await this.criarTabela(query);
        return resposta
    }

    static async inserirUsuario(usuario) {
        const query = `INSERT INTO usuarios (usuario, senha, isAdmin) VALUES (?, ?, ?)`;
        const resposta = await this.inserir(usuario, query);
        return resposta
    }

    static async listarTodosUsuarios() {
        const query = `SELECT * FROM usuarios`;
        const resposta = await this.listarTodos(query);
        return resposta;
      }
      static async listarUsuarioPorId(id) {
        const query = `SELECT * FROM usuarios WHERE id = ?`;
        const resposta = await this.listarPorId(id, query);
        return resposta;
      }
      static async deletarUsuarioPorId(id) {
        const query = `DELETE FROM usuarios WHERE id = ?`;
        const resposta = await this.deletarPorId(id, query);
        return resposta;
      }
      static async atualizarUsuarioPorId(id, usuario) {
        const query = `UPDATE usuarios
        SET usuario = ?,
            senha = ?,
            isAdmin = ?,
            WHERE id = ?`;
        const resposta = await this.atualizarPorId(usuario, id, query);
        return resposta;
      }
}

export default databaseUsuarios;