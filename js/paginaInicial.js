const nomeUsuario = document.querySelector('.username');

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
