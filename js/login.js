const url = "https://orangevolution.herokuapp.com/usuarios"
const botao = document.getElementById('send');
const usuarioErro = document.getElementById('erro-login');
const senhaErro = document.getElementById('erro-senha');

function getUsers(){
    axios.get(url)
        .then(response => {
            const data = response.data;
            const login = document.querySelector('#ilogin').value;
            const password = document.querySelector('#ipassword').value;
            
            let userValid = {
                id:'',
                login: '',
                password: '',
                isAdmin: ''
            }

            let erroUSuariosenha = false;
            data.forEach(element => {
                if(login == element.usuario && password == element.senha){
                    erroUSuariosenha = true;
                    usuarioErro.innerHTML = "";
                    senhaErro.innerHTML = "";
                    let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
                    localStorage.setItem('token', token)
                    userValid = {
                        id: element.usario_id,
                        login: element.usuario,
                        password: element.senha,
                        isAdmin: element.isAdmin
                    }
                    localStorage.setItem('userLogado', JSON.stringify(userValid));
                    if(element.isAdmin == 1){
                        location.href = "../pages/areaAdmin.html";
                    } else{
                        location.href = "../pages/areaUsuario.html";                       
                    };
                } else {
                    if(login != element.usuario && password == element.senha) {
                        usuarioErro.innerHTML = "Usuário digitado é inválido."
                        usuarioErro.style.color = "#ff0000";
                        usuarioErro.style.width = "65%"
                        usuarioErro.style.display = "flex";
                        usuarioErro.style.justifyContent = "flex-start"
                        usuarioErro.style.fontSize = "12px";
                        senhaErro.innerHTML = ""
                        erroUSuariosenha = true;
                    } 
                    if(login == element.usuario && password != element.senha) {
                        senhaErro.innerHTML = "Senha digitada é invalida."
                        senhaErro.style.color = "#ff0000"; 
                        senhaErro.style.width = "65%"
                        senhaErro.style.display = "flex";
                        senhaErro.style.justifyContent = "flex-start"
                        senhaErro.style.fontSize = "12px";
                        usuarioErro.innerHTML = ""
                        erroUSuariosenha = true;
                    }
                    
                    if(!erroUSuariosenha) {
                        senhaErro.innerHTML = "Senha digitada é invalida."
                        senhaErro.style.color = "#ff0000"; 
                        senhaErro.style.width = "65%"
                        senhaErro.style.display = "flex";
                        senhaErro.style.justifyContent = "flex-start"
                        senhaErro.style.fontSize = "12px";
                        usuarioErro.innerHTML = "Usuário digitado é inválido."
                        usuarioErro.style.color = "#ff0000";
                        usuarioErro.style.width = "65%"
                        usuarioErro.style.display = "flex";
                        usuarioErro.style.justifyContent = "flex-start"
                        usuarioErro.style.fontSize = "12px";
                    }
                }                                                                                            
            })                    
        })
}