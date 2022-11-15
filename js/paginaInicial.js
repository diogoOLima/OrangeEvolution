const nomeUsuario = document.querySelector('.username');
const iniciais = document.querySelector('.iniciais');

let userLogado = JSON.parse(localStorage.getItem('userLogado'));

if(localStorage.getItem('token') == null){
    alert("Você precisa esta logado para acessar essa pagina.");
    location.href = "../pages/login.html";
}

function sair(){
    localStorage.removeItem('token');
    location.href = "../pages/login.html";
}

function acessarFS(){
    location.href = "../pages/conteudoTrilhaFS.html"
}
function acessarUIUX(){
    location.href = "../pages/conteudoTrilhaUXUI.html"
}
function acessarQA(){
    location.href = "../pages/conteudoTrilhaQA.html"
}

function acessarFSAdm(){
    location.href = "../pages/conteudoTrilhaFSAdm.html"
}
function acessarUIUXAdm(){
    location.href = "../pages/conteudoTrilhaUXUIAdm.html"
}
function acessarQAAdm(){
    location.href = "../pages/conteudoTrilhaQAAdm.html"
}

nomeUsuario.innerHTML = `Olá ${userLogado.login}`;

/*  innerHtml de inicias    */
let inicial = userLogado.login.split(' ').map((el)=>el[0]).join('');

iniciais.innerHTML = `${inicial}`;
