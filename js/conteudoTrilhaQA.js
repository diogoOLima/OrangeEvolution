const url = "https://orangevolution.herokuapp.com/aulas"
const conteudos = document.querySelector('#conteudos')
const infoProgressoDOM = document.querySelector('#infoProgresso')
const progresso = document.querySelector("#barra div")

/* iniciais Header */
const iniciais = document.querySelector('.iniciais');
let userLogado = JSON.parse(localStorage.getItem('userLogado'));
let inicial = userLogado.login.split(' ').map((el)=>el[0]).join('');

iniciais.innerHTML = `${inicial}`;

//


var countConcluido = 0;
let countAulas = 0;
conteudos.style.color = "white"

function getAulas(){
    axios.get(url)
        .then(response => {
            const data = response.data

            const nomeTrilha = ["Artigo QA", "Video QA", "Curso QA"]



            nomeTrilha.forEach(element => {
                data.forEach(conteudo => {
                    if (conteudo.tipo == element){
                        countAulas++;
                        let aula = {
                            nome: conteudo.nomeAula,
                            duração: conteudo.tempo,
                            origem: conteudo.origem,
                            link: conteudo.link
                        }
                        conteudos.innerHTML += ` 
                        <div class="card card-borda">
                                <div class="card-body">
                                    <div class="row" style="display: flex;align-items: center;justify-content: center;">
                                        <div class="col-md-5"><div><small class="text-info">Artigo</small><p>${aula.nome}</p></div></div>
                                        <div class="col-md-2 col-5 mt-4 mb-2 mt-sm-0"><p><small class="d-md-none text-info">Tempo: </small> ${aula.duração}</p></div>
                                        <div class="col-md-2 col-7 mt-4 mb-2 mt-sm-0"><p><font class="d-md-none text-info">Origem: </font>${aula.origem}</p></div>
                                        <div class="col-md-2 col-sm-9 col-9"><font class="d-md-none text-info">Status: </font><button id="statusButton${countAulas}" class ="pendente" onclick="altStatusButton(id)">Pendente</button></div>
                                        <a href="${conteudo.link}" class="col-md-1 col-sm-3 col-3" target="_blank">
                                            <div class="col-md-1"><i class="fa-solid fa-chevron-right fs-4" ></i></div>
                                        </a>
                                    </div>
                                </div>
                        </div>
                           
                            <br>
                        `
                    }

                })
            })
            calcularProgresso()
        })
}

function altStatusButton(id){
    let status = document.querySelector(`#${id}`)

    if(status.textContent === "Pendente"){
        status.textContent = "Concluido"
        status.style.backgroundColor = "green"
        countConcluido++
        calcularProgresso()
    }else{
        status.textContent = "Pendente"
        status.style.backgroundColor = "#CA1C1C"
        countConcluido--
        calcularProgresso()
    }

}

function calcularProgresso() {
    let progressoAtual = (countConcluido / countAulas) * 100;
    progresso.style.width= `${progressoAtual}%`
    infoProgressoDOM.innerHTML = `${~~progressoAtual}% - ${countConcluido}/${countAulas}<br>`
}


getAulas();