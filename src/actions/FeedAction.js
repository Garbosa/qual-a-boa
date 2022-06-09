import axios from 'axios';


export const getAllPartners = async (_bearer) =>{

    const response = await axios({
        method:'get',
        url: "https://f0a8-2804-14d-78b1-809f-b84e-c888-ce44-a9bf.sa.ngrok.io/partners?page=1&limit=100",
        
        headers:{
            "Authorization": `bearer ${_bearer}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept",
            "Content-Type": "application/json"
        }});
        return response.data;
}