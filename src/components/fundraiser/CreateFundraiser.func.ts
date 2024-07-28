import axios from "axios";
import {IFundraiserForm} from "@/components/fundraiser/IFundraiser";



export const onCreateFundraiser = (data:IFundraiserForm) => {
    axios.post('http://13.60.12.224:8080/api/fundraisers/add', data, {
        headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem('auth_token')}`,
        },
        withCredentials: true
    })
        .then(response =>{
            console.log(response)
            let storedFundraisers: string | null = window.sessionStorage.getItem('fundraiser');
            let currentFundraisers = storedFundraisers ? JSON.parse(storedFundraisers) : [];
            currentFundraisers.push(response.data);

            window.sessionStorage.setItem('fundraiser', JSON.stringify(currentFundraisers));
            window.location.reload();
        })
        .catch(error =>{
            console.log(error)
        })

};