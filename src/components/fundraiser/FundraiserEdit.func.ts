import axios from "axios";
import {IFundraiserCard, IFundraiserForm} from "@/components/fundraiser/IFundraiser";

export const onDeleteFundraiser = (id: number) => {
    axios.delete(`http://13.60.12.224:80/api/fundraisers/${id}`, {
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

export const onEditFundraiser = (data:IFundraiserForm, id:number) =>{

    axios.patch(`http://13.60.12.224:80/api/fundraisers/${id}/update`,{
        amount: data.amount,
        name: data.name,
        jar_link: data.jar_link,
        description: data.description,
        is_closed: data.is_closed,
        categories: data.categories
    },{
        headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem('auth_token')}`,
        },
        withCredentials: true,
    })
        .then(response =>{
            console.log(response)
            window.location.reload();
        })
        .catch(error =>{
            console.log(error)
        })
}