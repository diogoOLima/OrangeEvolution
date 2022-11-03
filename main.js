const url = "http://localhost:5500/api"

function getUsers(){
    axios.get(url)
        .then(response => {
            const data = response.data.users
            renderResults.textContent = JSON.stringify(data.users);
            const login = document.querySelector('#ilogin')
            const password = document.querySelector('#ipassword')
            renderResults.textContent = login.value

            // data.forEach(element => {
            //     if()
            // });
        })
}

