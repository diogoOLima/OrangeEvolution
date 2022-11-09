let welcome = document.getElementById('welcome')
let userLogado = JSON.parse(localStorage.getItem('userLogado'))

alert(userLogado.login);
welcome.innerHTML = `Seja bem vindo ${userLogado.login}`


if(localStorage.getItem('token') == null){
    alert("voce precisa esta logado para acessar essa pagina")
    location.href = "../pages/index.html"
}

function sair(){
    localStorage.removeItem('token')
    location.href = "../pages/index.html"
}



