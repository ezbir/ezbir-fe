'use client'

import CreateFundraiser from "@/components/fundraiser/CreateFundraiser";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {Avatar} from "antd";

// User imports
import FundraiserCard from "@/components/fundraiser/FundraiserCard";
import {IFundraiserCard} from "@/components/fundraiser/IFundraiser";
import Link from "next/link";

const Profile: React.FC = () =>{
    const router = useRouter();
    const [fundraisersData, setFundraisersData] = useState<IFundraiserCard[]>([]);


    useEffect(() => {
        const token: string | null = sessionStorage.getItem('auth_token');
        if (!token) {
            router.push('/auth/login');
        } else {
            try {
                const storedFundraisers = sessionStorage.getItem('fundraiser');
                if (storedFundraisers) {
                    setFundraisersData(JSON.parse(storedFundraisers));
                }
            } catch (error) {
                console.error('Failed to parse fundraiser data:', error);
                setFundraisersData([]);
            }
        }
    }, [router]);

    const username = sessionStorage.getItem('username') ?? '';
    const email = sessionStorage.getItem('email') ?? '';
    const infoAboutYourself = sessionStorage.getItem('infoAboutYourself') ?? '';


    return(
        <main className='flex flex-col  items-center'>
            <section className='flex flex-grow p-4 w-[80%] mt-4'>
                <section>
                    <Avatar shape="square" size={256} icon={<img src='/img/userIcon.svg' alt="avatar"/>}/>
                </section>
                <section className='flex flex-col pl-4'>
                    <p>
                        Імʼя:
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{username}
                    </p>
                    <br/>
                    <p>
                        Електронна пошта:
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{email}
                    </p>
                    <br/>
                    <p>
                        Про себе:
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{infoAboutYourself}
                    </p>

                </section>
                <Link href='/setting/account' className='flex-grow flex justify-end h-full'>
                    <img src="/img/setting.svg" alt=""/>
                </Link>
            </section>
            <section className='flex flex-col flex-grow items-center p-4  w-[80%]'>
                <CreateFundraiser/>
                <ul className='w-full'>
                    {fundraisersData.map((item:IFundraiserCard) => (
                            <FundraiserCard
                                id={item.id}
                                categories={item.categories}
                                description={item.description}
                                is_closed={item.is_closed}
                                jar_link={item.jar_link}
                                name={item.name}
                                posts={item.posts}
                                amount={item.amount}
                                user_id={item.user_id}
                                username={username}
                                views={item.views}
                                key={item.id}
                                isEdit={true}
                            />
                    ))}
                </ul>

            </section>
        </main>
    );
};

export default Profile;
