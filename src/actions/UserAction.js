import axios from "axios";

export const getUserData = async (_id, bearer) => {
  const response = await axios({
    method: "get",
    url: `https://3a76-2804-14d-78b1-809f-387c-46df-70b4-b239.sa.ngrok.io/user/${_id}`,

    headers: {
      Authorization: `bearer ${bearer}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const putUserData = async (data, _id,bearer) => {
  const response = await axios({
    method: "put",
    url: `https://3a76-2804-14d-78b1-809f-387c-46df-70b4-b239.sa.ngrok.io/user/${_id}`,

    headers: {
      Authorization: `bearer ${bearer}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      "Content-Type": "application/json",
    },
    data: {
      name: data.name,
      birthday: data.birthday,
      address: data.address,
      cep: data.cep,
      city: data.city,
      state: data.state,
      email: data.email,
      preferences: data?.preferences
    },
  });
  return response.data;
};
