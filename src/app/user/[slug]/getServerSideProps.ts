import { GetServerSideProps } from 'next';
import axios from 'axios';
import Page from "@/app/user/[slug]/page";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug = context.params?.slug;
    const response = await axios.get(`http://localhost:8080/user/get?id=${slug}`);

    return {
        props: {
            userData: response.data,
        },
    };
};

export default Page;