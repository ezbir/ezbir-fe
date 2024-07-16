'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import { Avatar } from "antd";
import FundraiserCard from "@/components/fundraiser/FundraiserCard";

//user imports
import {FundraiserData} from "@/components/fundraiser/IFundraiser";

interface UserPageData {
    fundraiserList: FundraiserData[];
    infoAboutYourself: string;
    photoUrl: string;
    userId: number;
    username: string;
    views: number;
}

const UserPage = ({ params }: { params: { slug: string } }) => {
    const [userData, setUserData] = useState<UserPageData | null>(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/user/get?id=${params.slug}`)
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [params.slug]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <main className='flex flex-col items-center'>
            <section className='flex flex-grow p-4 w-[80%] mt-4'>
                <section className='bg-gray-300 rounded'>
                    <Avatar shape="square" size={256} src={userData.photoUrl || '/img/userIcon.svg'} />
                </section>
                <section className='flex flex-col pl-4'>
                    <p>
                        Імʼя:
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{userData.username}
                    </p>
                    <br />
                    <br />
                    <p>
                        Про себе:
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{userData.infoAboutYourself || 'Немає інформації'}
                    </p>
                </section>
            </section>
            <section className='flex flex-col flex-grow items-center p-4 w-full'>
                <h2>Збори користувача:</h2>
                <ul className='w-[80%]'>
                    {userData.fundraiserList.map((fundraiser) => (
                        <li className='border-2 border-black w-full h-[270px] mt-3 mb-3 p-2' key={fundraiser.id}>
                            <FundraiserCard
                                id={fundraiser.id}
                                categories={fundraiser.categories}
                                description={fundraiser.description}
                                is_closed={fundraiser.is_closed}
                                jar_link={fundraiser.jar_link}
                                name={fundraiser.name}
                                posts={fundraiser.posts}
                                amount={fundraiser.amount}
                                user_id={fundraiser.user_id}
                                username={fundraiser.username}
                                views={fundraiser.views}
                            />
                        </li>
                    ))}
                </ul>

            </section>
        </main>
    );
};

export default UserPage;
