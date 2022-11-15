const nomeUsuario = document.querySelector('.username');
const iniciais = document.querySelector('.iniciais');

let userLogado = JSON.parse(localStorage.getItem('userLogado'));

if(localStorage.getItem('token') == null){
    alert("Você precisa esta logado para acessar essa pagina.");
    location.href = "../pages/Login.html";
}

function sair(){
    localStorage.removeItem('token');
    location.href = "../pages/Login.html";
}

nomeUsuario.innerHTML = `Olá ${userLogado.login}`;

/*  innerHtml de inicias    */
let inicial = userLogado.login.split(' ').map((el)=>el[0]).join('');

iniciais.innerHTML = `${inicial}`;
