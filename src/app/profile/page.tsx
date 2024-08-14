'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CreateFundraiser from "@/components/fundraiser/CreateFundraiser";
import FundraiserCard from "@/components/fundraiser/FundraiserCard";
import { IFundraiserCard } from "@/components/fundraiser/IFundraiser";
import Link from "next/link";
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
        return <main className='flex flex-col items-center p-4'>Loading...</main>;
    }

    return (
        <main className='flex flex-col items-center p-4'>
            <section className='flex flex-row md:items-start p-4 w-full md:w-4/5 mt-4'>
                <section className='flex mb-4 md:mb-0'>
                    <UploadAvatar link={photoUrl!}/>
                </section>
                <section className='flex flex-col pl-4 w-full'>
                    <h3 className=' text-lg md:text-2xl font-bold'>{username}</h3>
                    <p className='mt-2 text-xs md:text-base'>
                        Електронна пошта:
                        <br />
                        <span className='pl-2 text-xs md:text-base'>{email}</span>
                    </p>
                    <p className='mt-2 text-xs md:text-base'>
                        Про себе:
                        <br />
                        <span className='pl-2 text-xs md:text-base'>{infoAboutYourself}</span>
                    </p>
                </section>
                <Link href={'/profile/setting/account'} className={'hidden justify-end md:block'}>
                    <img className="size-16" src="/img/setting.svg" alt="settings"/>
                </Link>
            </section>
            <section className='flex flex-col items-center p-4 w-full md:w-4/5'>
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
