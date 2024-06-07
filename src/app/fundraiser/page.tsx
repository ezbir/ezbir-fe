'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import FundraiserCard from "@/components/FundraiserCard";

interface FundraiserData {
    cards: string[],
    categories: string[],
    description: string,
    isClosed: boolean,
    jarLink: string,
    name: string,
    posts: string[],
    suma: number,
    userId: number,
    fundraiserId: number,
    username: string,
    views: number

}

const Fundraiser: React.FC = () => {
    const [itemList, setItemList] = useState<FundraiserData[]>([]);

    useEffect(() => {
        axios.get<FundraiserData[]>('http://localhost:8080/user/fundraiser/get/all', {})
            .then(response => {
                console.log(response.data)
                const data = response.data.map(el => ({
                    cards: el.cards,
                    categories: el.categories,
                    description: el.description,
                    isClosed: el.isClosed,
                    jarLink: el.jarLink,
                    name: el.name,
                    posts: el.posts,
                    suma: el.suma,
                    userId: el.userId,
                    fundraiserId: el.fundraiserId,
                    username: el.username,
                    views: el.views
                }));
                setItemList(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <section className='flex justify-center'>
            <section className='w-[80%]'>
                <input className='w-full bg-gray-200 border-black rounded-3xl p-3 mt-3 mb-3'
                       placeholder="Пошук Збору"
                       type="search"/>
                <section className='flex justify-between items-center'>
                    <section>
                        <label className='text-gray-400 text-xl'>
                            Сортувати за: <br/>
                            <select name="select" id=""
                                    className='w-[300px] border-b-2 border-black rounded-none text-black'>
                                <option value="none_select">Без сортування</option>
                                <option value="vay">Назвою (від А до Я)</option>
                                <option value="12">Назвою (від Я до А)</option>
                                <option value="12">Найновішими</option>
                                <option value="12">Найстарішими</option>
                            </select>
                        </label>
                    </section>
                    <section>
                        <h4 className='text-gray-700'>Всього зборів : 3</h4>
                    </section>
                </section>


                <ul className='w-full mt-10'>
                    {itemList.map(item => (
                        <li className='border-b-2 border-black w-full h-[220px] mt-3 mb-3 p-2'
                            key={item.fundraiserId}>
                            <FundraiserCard
                                cards={item.cards}
                                categories={item.categories}
                                description={item.description}
                                isClosed={item.isClosed}
                                jarLink={item.jarLink}
                                name={item.name}
                                posts={item.posts}
                                suma={item.suma}
                                userId={item.userId}
                                fundraiserId={item.fundraiserId}
                                username={item.username}
                                views={item.views}
                            />
                        </li>
                    ))}
                </ul>
            </section>


        </section>
    );
};

export default Fundraiser;
