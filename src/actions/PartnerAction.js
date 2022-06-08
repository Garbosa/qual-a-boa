import axios from 'axios';


export const qLogin = (username, password) =>{
    axios({
        method:'post',
        url: "https://651c-2804-14d-78b1-809f-494a-8613-f1fb-8efc.sa.ngrok.io/auth/authenticate",
        headers:{
            "Content-Type": "application/json"
        },
        data:{
            "email": "fred2@gmail.com",
            "password": "654321"
        }
    }).then(res => console.log(res)
    //salvar token
    )
    .catch(err => console.log(err))
}