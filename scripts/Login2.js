const url = "https://orangevolution.herokuapp.com/usuarios"
const botao = document.getElementById('send');
const usuarioErro = document.getElementById('erro-login');
const senhaErro = document.getElementById('erro-senha');

function getUsers(){
    axios.get(url)
        .then(response => {
            const data = response.data
            // renderResults.textContent = JSON.stringify(data)
            const login = document.querySelector('#ilogin').value;
            const password = document.querySelector('#ipassword').value;
            
            let userValid = {
                id:'',
                login: '',
                password: '',
                isAdmin: ''
            }

            botao.addEventListener('click',(e)=> {
               
                data.forEach(element => {
                    if(login == element.usuario && password == element.senha){
    
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
                            location.href = "../pages/adminPage.html";
                        }else{
                            location.href = "../pages/userPage.html";
                        };
                    } else {
                        if(login != element.usuario && password == element.senha) {
                            usuarioErro.innerHTML = "Usuário digitado é inválido."
                            usuarioErro.style.color = "#ff0000";
                        } else if(login == element.usuario && password != element.senha) {
                            senhaErro.innerHTML = "Senha digitada é invalida."
                            senhaErro.style.color = "#ff0000"; 
                        } else {
                            usuarioErro.innerHTML = "Usuário digitado é inválido."
                            usuarioErro.style.color = "#ff0000";
                            senhaErro.innerHTML = "Senha digitada é invalida."
                            senhaErro.style.color = "#ff0000";    
                     }
                      
                    }                                                                                     
                })  

            })
                            
        })
}


getUsers();