import Database from "../infra/database";

class DAO {
    static async activePragma(){
        const query = "PRAGMA foreign_keys = ON";

        Database.run(query, (err)=> {
            if(err) {
                console.log(err);
            } else {
                console.log("Entidade está ativa");
            }
        })
    }

    static criarTabela(query) {
        this.activePragma();
        return new Promise ((resolve, reject)=> {
            Database.run(query, (err) => {
                if(err) {
                    reject(err.message)
                } else {
                    resolve("Tabela criada com sucesso.")
                }
            })
        })
    }

    static inserir(entidade, query) {
        const body = Object.values(entidade);
    
        return new Promise((resolve, reject) => {
          Database.run(query, [...body], (err) => {
            if (err) {
              reject(err.message);
            } else {
              resolve({ error: false, message: "Cadastrado com sucesso!" });
            }
          });
        });
      }

      static listarTodos(query) {
        return new Promise((resolve, reject) => {
          Database.all(query, (err, resultado) => {
            if (err) {
              reject(err.message);
            } else {
              return resolve(resultado);
            }
          });
        });
      }
      static listarPorId(id, query) {
        return new Promise((resolve, reject) => {
          Database.get(query, id, (e, resultado) => {
            if (e) {
              reject(e.message);
            } else {
              return resolve(resultado);
            }
          });
        });
      }
      static deletarPorId(id, query) {
        return new Promise((resolve, reject) => {
          Database.run(query, id, (e) => {
            if (e) {
              reject(e.message);
            } else {
              resolve({
                erro: false,
                message: `Registro com Id ${id} deletado com sucesso`,
              });
            }
          });
        });
      }

      static atualizarPorId(entidade, id, query) {
        const body = Object.values(entidade);
        return new Promise((resolve, reject) => {
          Database.run(query, [...body, id], (e) => {
            if (e) {
              reject(e.message);
            } else {
              resolve({message: `ID ${id} atualizado com sucesso.`});
            }
          });
        });
      }
}

export default DAO;