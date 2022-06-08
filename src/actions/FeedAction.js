import axios from 'axios';


export const getAllPartners = async () =>{
    const response = await axios({
        method:'get',
        url: "https://3a76-2804-14d-78b1-809f-387c-46df-70b4-b239.sa.ngrok.io/partners?page=1&limit=100",
        
        headers:{
            "Authorization": `bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWY3NmZkOThlNDk5OTFlNzFmMjA4YyIsImlhdCI6MTY1NDYzNTk5MywiZXhwIjoxNjU0NzIyMzkzfQ.pERZdk3crA4jyijzgMfjvJq5sScknZstpISSbKvf7C8'}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept",
            "Content-Type": "application/json"
        }});
        return response.data;
}