'use client'
import React, {useEffect, useState} from "react";
import axios from "axios";
import FundraiserCard from "@/app/fundraiser/components/FundraiserCard";
import {FundraiserData} from "@/interfaces/FundraiserData";


const Fundraiser: React.FC = () => {
    const [itemList, setItemList] = useState<FundraiserData[]>([]);

    useEffect(() => {
        axios.get<FundraiserData[]>('http://localhost:8080/api/fundraisers/search',)
            .then(response => {
                console.log(response.data)
                const data = response.data.map(el => ({
                    categories: el.categories,
                    description: el.description,
                    is_closed: el.is_closed,
                    jar_link: el.jar_link,
                    name: el.name,
                    posts: el.posts,
                    amount: el.amount,
                    user_id: el.user_id,
                    id: el.id,
                    username: el.username,
                    views: el.views,
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
                        <h4 className='text-gray-700'>Всього зборів : {itemList.length}</h4>
                    </section>
                </section>


                <ul className='w-full mt-10'>
                    {itemList.map(item => (
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
                            username={item.username}
                            views={item.views}
                            key={item.id}
                        />
                    ))}
                </ul>
            </section>


        </section>
    );
};

export default Fundraiser;
