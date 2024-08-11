'use client'
import {useEffect} from "react";
import {getFundraiserData} from "@/components/fundraiser/dynamic-fundraiser/DynamicFundraiser.func";

const Page = ({ params }: { params: { id: string } }) => {

    useEffect(() => {
        const fetchFundraiserData = async () =>{
            try {
                const data= await  getFundraiserData(params.id)
                await console.log(data);
            }
            catch (error){
                console.error(`Error fetching fundraiser id=${params.id}:`, error);
            }
        }
        fetchFundraiserData()
    }, []);

    return (
        <div>
            <h1>{params.id}</h1>
        </div>
    );
}

export default Page;