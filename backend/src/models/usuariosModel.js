class usuariosModel {
    constructor(usuario, senha, isAdmin) {
        this.usuario = usuario,
        this.senha = senha,
        this.isAdmin = isAdmin;
    }
}

class trilhaModel {
    constructor(nomeTrilha, tipoTrilha) {
        this.nomeTrilha = nomeTrilha,
        this.tipoTrilha = tipoTrilha;
    }
}

class aulasModel {
    constructor(nomeAula, link) {
        this.nomeAula = nomeAula,
        this.link = link;
    }
}

export default usuariosModel;