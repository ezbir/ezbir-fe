import axios from "axios";
import {IFundraiserCard} from "@/components/fundraiser/IFundraiser";

export const onDeleteFundraiser = (id: number) => {
    axios.delete(`http://localhost:8080/api/fundraisers/${id}`, {
        headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem('auth_token')}`,
        },
        withCredentials: true,
    })
        .then(response => {
            console.log(response);
            const storedFundraisers = window.sessionStorage.getItem('fundraiser');
            if (storedFundraisers) {
                const fundraisers = JSON.parse(storedFundraisers) as IFundraiserCard[];
                const updatedFundraisers = fundraisers.filter(fundraiser => fundraiser.id !== id);
                window.sessionStorage.setItem('fundraiser', JSON.stringify(updatedFundraisers));
                window.location.reload();
            }
        })
        .catch(error => {
            console.error("There was an error deleting the fundraiser!", error);
        });
};