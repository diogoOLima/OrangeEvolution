let oi = window.document.getElementById('teste')
let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let diogo = '1'

alert(userLogado.login);

if(localStorage.getItem('token') == null){
    alert("voce precisa esta logado para acessar essa pagina")
    location.href = "index.html"
}

function sair(){
    localStorage.removeItem('token')
    location.href = "index.html"
}



