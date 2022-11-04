const url = "http://localhost:5500/api"

function getUsers(){
    axios.get(url)
        .then(response => {
            const data = response.data.users
            // renderResults.textContent = JSON.stringify(data)
            const login = document.querySelector('#ilogin').value
            const password = document.querySelector('#ipassword').value
            
            data.forEach(element => {
                if(login == element.login && password == element.password){
                    if(element['isAdmin'] == 1){
                        alert("admin")
                    }else{
                        alert("user")
                    }

                }
             });
        })
}
