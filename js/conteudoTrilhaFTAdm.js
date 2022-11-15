
const url = "https://orangevolution.herokuapp.com/aulas"
const conteudos = document.querySelector('#conteudos')
const infoProgressoDOM = document.querySelector('#infoProgresso')
const progresso = document.querySelector("#barra div")
const btnAdicionar = document.querySelector(".btnAdicionar")
const divBtn = document.querySelector(".divBtn")
// const form = document.querySelector("form")

const iniciais = document.querySelector('.iniciais');
let userLogado = JSON.parse(localStorage.getItem('userLogado'));
let inicial = userLogado.login.split(' ').map((el)=>el[0]).join('');

iniciais.innerHTML = `${inicial}`;

var countConcluido = 0;
let countAulas = 0;
conteudos.style.color = "white"

function fazPost(url, body){
    axios.post(url, body)
        .then(response => {
            alert("Aula cadastrada com sucesso!")
            getAulas()
        })
}

// form.addEventListener("submit", function(){

//     console.log(formNome.value)
//     console.log(formLink.value)

//     body = {
//         "nomeAula": formNome,
//         "link": formLink,
//         "tempo": formDuracao,
//         "origem": formOrigem,
//         "tipo": formTipo
//     }
// })

function cadastroAula(){
    event.preventDefault()
    let formLink = document.querySelector('#link').value
    let formNome = document.querySelector('#nome').value
    let formTipo = document.querySelector('#tipo').value
    let formDuracao = document.querySelector('#duracao').value
    let formOrigem = document.querySelector('#origem').value
    
    body = {
        "nomeAula": formNome,
        "link": formLink,
        "tempo": formDuracao,
        "origem": formOrigem,
        "tipo": formTipo
    }


    fazPost(url, body)
}

function removerAula(id){
    id = id.slice(6)
    let confirmacao = confirm("Você realmente deseja excluir essa aula?");
    if(confirmacao) {
        axios.delete(`${url}/${id}`)
        .then(response =>{
            alert(`Aula de id = ${id} foi removida com sucesso!`)
            getAulas()
            window.location.reload();
        })
    }
}

function getAulaPorId(id){
    id = id.slice(6)
    axios.get(`${url}/${id}`)
        .then(response => {
            const data = response.data;
            console.log(data)
            btnAdicionar.style.display = 'none'
            // form.onsubmit = editarAula()
            // divBtn.innerHTML = `<button id="aulaId${id}" class="aulaId${id}" type="submit">Editar</button>`

            let formLink = document.querySelector('#link')
            let formNome = document.querySelector('#nome')
            let formTipo = document.querySelector('#tipo')
            let formDuracao = document.querySelector('#duracao')
            let formOrigem = document.querySelector('#origem')

            formLink.value = data.link
            formNome.value = data.nomeAula
            formTipo.value = data.tipo
            formDuracao.value = data.tempo
            formOrigem.value = data.origem
        })

}

// function editarAula(id) {
//     id = id.slice(6)
//     let formLink = document.querySelector('#link').value
//     let formNome = document.querySelector('#nome').value
//     let formTipo = document.querySelector('#tipo').value
//     let formDuracao = document.querySelector('#duracao').value
//     let formOrigem = document.querySelector('#origem').value
            
//     body = {
//         "nomeAula": formNome,
//         "link": formLink,
//         "tempo": formDuracao,
//         "origem": formOrigem,
//         "tipo": formTipo
//     }

//     console.log(body)

//     axios.put(`${url}/${id}`, body)
//         .then(response => {
//             getAulas();
//         })
// }

function getAulas(){
    axios.get(url)
        .then(response => {
            console.log(response.data);
            const data = response.data

            const nomeTrilha = ["Artigo FullStack", "Video FullStack", "Curso FullStack"]



            nomeTrilha.forEach(element => {
                data.forEach(conteudo => {
                    if (conteudo.tipo == element){
                        countAulas++;
                        let aula = {
                            nome: conteudo.nomeAula,
                            duração: conteudo.tempo,
                            origem: conteudo.origem,
                            link: conteudo.link,
                            aulaId: conteudo.aula_id
                        }
                        conteudos.innerHTML += ` 
                        <div class="card card-borda">
                                <div class="card-body">
                                    <div class="row" style="display: flex;align-items: center;justify-content: center;">
                                        <div class="col-md-5"><div><small class="text-info">Artigo</small><p>${aula.nome}</p></div></div>
                                        <div class="col-md-2 col-5 mt-4 mb-2 mt-sm-0"><p><small class="d-md-none text-info">Tempo: </small> ${aula.duração}</p></div>
                                        <div class="col-md-2 col-7 mt-4 mb-2 mt-sm-0"><p><font class="d-md-none text-info">Origem: </font>${aula.origem}</p></div>
                                        <div class="col-md-1 col-3"><button onclick="getAulaPorId(id)" class="btn-admin" id="aulaId${aula.aulaId}"><img src="../images/edit.png"></button></div>
                                        <div class="col-md-1 col-6"><button onclick="removerAula(id)" class="btn-admin" id="aulaId${aula.aulaId}"><img src="../images/delete.png"></button></div>
                                        <div class="col-md-1 col-3"><img src="../images/points.png"></div>    
                                    </div>
                                </div>
                        </div>
                           
                            <br>
                        `
                    }

                })
            })
            // calcularProgresso()
        })
}

// function altStatusButton(id){
//     let status = document.querySelector(`#${id}`)

//     if(status.textContent === "Pendente"){
//         status.textContent = "Concluido"
//         status.style.backgroundColor = "green"
//         countConcluido++
//         calcularProgresso()
//     }else{
//         status.textContent = "Pendente"
//         status.style.backgroundColor = "#CA1C1C"
//         countConcluido--
//         calcularProgresso()
//     }

// }

// function calcularProgresso() {
//     let progressoAtual = (countConcluido / countAulas) * 100;
//     progresso.style.width= `${progressoAtual}%`
//     infoProgressoDOM.innerHTML = `${~~progressoAtual}% - ${countConcluido}/${countAulas}<br>`
// }

// cadastroAula()
getAulas();