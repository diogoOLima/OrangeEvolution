const url = "https://orangevolution.herokuapp.com/usuarios"

function getUsers(){
    axios.get(url)
        .then(response => {
            const data = response.data
            // renderResults.textContent = JSON.stringify(data)
            const login = document.querySelector('#ilogin').value
            const password = document.querySelector('#ipassword').value
            
            let userValid = {
                id:'',
                login: '',
                password: '',
                isAdmin: ''
            }

            var userFound = false
            data.forEach(element => {
                if(login == element.usuario && password == element.senha){
                    userFound = true
                    let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
                    localStorage.setItem('token', token)
                    userValid = {
                        id: element.usario_id,
                        login: element.usuario,
                        password: element.senha,
                        isAdmin: element.isAdmin
                    }
                    localStorage.setItem('userLogado', JSON.stringify(userValid))
                    if(element.isAdmin == 1){
                        location.href = "../pages/adminPage.html"
                    }else{
                        location.href = "../pages/userPage.html"
                    }

                }
            })
            if(!userFound){
                alert("Login e/ou senha inválidos")
            }
        })
}
