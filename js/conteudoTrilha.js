const url = "https://orangevolution.herokuapp.com/aulas"
const conteudos = document.querySelector('#conteudos')
const countConcluidoDOM = document.querySelector('#countConcluido')
countConcluidoDOM.style.color = "white"

var countConcluido = 0;
let countAulas = 0;
conteudos.style.color = "white"

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
                            link: conteudo.link
                        }
                        conteudos.innerHTML += ` 
                            <div class=aula>
                                <a href="${aula.link}" target="_blank">
                                    <p class="nomeAula"> ${aula.nome}</p>
                                    <p class="duracaoAula"> ${aula.duração}</p>
                                    <p class="origemAula">${aula.origem}</p>
                                    </a>
                                <button id="statusButton${countAulas}" class ="pendente" onclick="altStatusButton(id)">Pendente</button>
                            </div>
                            <br>
                        `
                    }

                })
            })
            countConcluidoDOM.innerHTML = `${countConcluido}/${countAulas}<br>`
        })
}

function altStatusButton(id){
    let status = document.querySelector(`#${id}`)

    if(status.textContent === "Pendente"){
        status.textContent = "Concluido"
        status.style.backgroundColor = "green"
        countConcluido++
        countConcluidoDOM.innerHTML = `${countConcluido}/${countAulas}<br>`
    }else{
        status.textContent = "Pendente"
        status.style.backgroundColor = "red"
        countConcluido--
        countConcluidoDOM.innerHTML = `${countConcluido}/${countAulas}<br>`
    }

}

getAulas();