import axios from 'axios';


export const qLogin = async (username, password) =>{
  let response = await axios({
        method:'post',
        url: "https://f0a8-2804-14d-78b1-809f-b84e-c888-ce44-a9bf.sa.ngrok.io/auth/authenticate",
        headers:{
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept",
            "Content-Type": "application/json"
        },
        data:{
            "email": username,
            "password": password
        }
    })
    return response;
}

export const registerUser = async (data) =>{
      const response = await axios({
            method:'post',
            url: "https://f0a8-2804-14d-78b1-809f-b84e-c888-ce44-a9bf.sa.ngrok.io/auth/register",
            // url: "https://cors-anywhere.herokuapp.com/https://651c-2804-14d-78b1-809f-494a-8613-f1fb-8efc.sa.ngrok.io/auth/authenticate",
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept",
                "Content-Type": "application/json"
            },
            data:{
                name: data.name,
                birthday: data.birthday,
                address: data.address,
                cep: data.cep,
                city: data.city,
                state: data.state,
                email: data.email,
                password: data.password,
            }
        });
        return response;
    
}
