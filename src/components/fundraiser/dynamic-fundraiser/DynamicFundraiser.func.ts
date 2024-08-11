import axios from "axios";
import {IFundraiserCard} from "@/components/fundraiser/IFundraiser";

export const getFundraiserData = async (id: string) =>{
    try{
        const response = await axios.get(`https://ezbir.org/api/fundraisers/${id}`)
        return {
                categories: response.data.categories,
                description: response.data.description,
                is_closed: response.data.is_closed,
                jar_link: response.data.jar_link,
                name: response.data.name,
                posts: response.data.posts,
                amount: response.data.amount,
                user_id: response.data.user_id,
                id: response.data.id,
                username: response.data.username,
                views: response.data.views,
        }
    }
    catch(error){
    console.log(error)
    }
}