const url = "http://localhost:5500/api"

function getUsers(){
    axios.get(url)
        .then(response => {
            const data = response.data.users
            // renderResults.textContent = JSON.stringify(data)
            const login = document.querySelector('#ilogin').value
            const password = document.querySelector('#ipassword').value
            
            let userValid = {
                login: '',
                password: '',
                isAdmin: ''
            }

            var userFound = false
            data.forEach(element => {
                if(login == element.login && password == element.password){
                    userFound = true
                    let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
                    localStorage.setItem('token', token)
                    userValid = {
                        login: element.login,
                        password: element.password,
                        isAdmin: element.isAdmin
                    }
                    localStorage.setItem('userLogado', JSON.stringify(userValid))
                    if(element.isAdmin == 1){
                        location.href = "adminPage.html"
                    }else{
                        location.href = "userPage.html"
                    }

                }
            })
            if(!userFound){
                alert("Login e/ou senha inválidos")
            }
        })
}
