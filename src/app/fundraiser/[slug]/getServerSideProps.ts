import { GetServerSideProps } from 'next';
import axios from 'axios';
import FundraiserPage from "@/app/fundraiser/[slug]/page";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug = context.params?.slug;
    const response = await axios.get(`http://localhost:8080/user/fundraiser/get?id=${slug}`);

    return {
        props: {
            fundraiserData: response.data,
        },
    };
};

export default FundraiserPage;
