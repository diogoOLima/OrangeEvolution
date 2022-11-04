const url = "http://localhost:5500/api"

function getUsers(){
    axios.get(url)
        .then(response => {
            const data = response.data.users
            // renderResults.textContent = JSON.stringify(data)
            const login = document.querySelector('#ilogin').value
            const password = document.querySelector('#ipassword').value
            
            var userFound = false
            data.forEach(element => {
                if(login == element.login && password == element.password){
                    userFound = true
                    if(element['isAdmin'] == 1){
                        location.href = "adminPage.html"
                    }else{
                        location.href = "userPage.html"
                    }

                }
            });
            if(!userFound){
                alert("Login e/ou senha inválidos")
            }
        })
}
