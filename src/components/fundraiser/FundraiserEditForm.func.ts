import axios from "axios";

export const onDeleteFundraiser = (id:number) => {
    axios.delete(`http://localhost:8080/api/fundraisers/${id}`, {
        headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem('auth_token')}`,
        },
        withCredentials: true,
    })
        .then(response =>{
            console.log(response)
        })
    ;
};