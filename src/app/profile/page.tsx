'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Avatar } from "antd";
import CreateFundraiser from "@/components/fundraiser/CreateFundraiser";
import FundraiserCard from "@/components/fundraiser/FundraiserCard";
import { IFundraiserCard } from "@/components/fundraiser/IFundraiser";
import Link from "next/link";
import ChangeableAvatar from "@/components/profile/UploadAvatar";
import UploadAvatar from "@/components/profile/UploadAvatar";

const Profile: React.FC = () => {
    const router = useRouter();
    const [fundraisersData, setFundraisersData] = useState<IFundraiserCard[]>([]);
    const [username, setUsername] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [photoUrl, setPhotoUrl] = useState<string | null>(null);
    const [infoAboutYourself, setInfoAboutYourself] = useState<string | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        const token: string | null = window.sessionStorage.getItem('auth_token');
        if (!token) {
            router.push('/auth/login');
        } else {
            try {
                const storedFundraisers = window.sessionStorage.getItem('fundraiser');
                if (storedFundraisers) {
                    setFundraisersData(JSON.parse(storedFundraisers));
                }
                setUsername(window.sessionStorage.getItem('username'));
                setEmail(window.sessionStorage.getItem('email'));
                setInfoAboutYourself(window.sessionStorage.getItem('infoAboutYourself'));
                setPhotoUrl(window.sessionStorage.getItem('photo_url'))
            } catch (error) {
                console.error('Failed to parse fundraiser data:', error);
                setFundraisersData([]);
            }
        }
    }, [router]);

    if (!isClient) {
        return <main className='flex flex-col items-center'>Loading...</main>;
    }

    return (
        <main className='flex flex-col items-center'>
            <section className='flex flex-grow p-4 w-[80%] mt-4'>
                <section>
                    <UploadAvatar link={photoUrl!}/>
                </section>
                <section className='flex flex-col pl-4 w-full'>
                    <h3>{username}</h3>
                    <br />
                    <p>
                        Електронна пошта:
                        <br />
                        <p className='pl-5'>{email}</p>
                    </p>
                    <br />
                    <p>
                        Про себе:
                        <br />
                        <p className='pl-5'>{infoAboutYourself}</p>
                    </p>
                </section>
                <Link href='/setting/account' className='flex-grow flex justify-end h-full'>
                    <img src="/img/setting.svg" alt="settings" />
                </Link>
            </section>
            <section className='flex flex-col flex-grow items-center p-4 w-[80%]'>
                <CreateFundraiser />
                <ul className='w-full'>
                    {fundraisersData.map((item: IFundraiserCard) => (
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
                            username={username || ""}
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
