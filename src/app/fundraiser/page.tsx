'use client'
import React, {useEffect, useState} from "react";
import axios from "axios";
import FundraiserCard from "@/components/fundraiser/FundraiserCard";
import {IFundraiserCard} from "@/components/fundraiser/IFundraiser";
import {getAllFundraiser} from "@/components/fundraiser/Fundraiser";


const Fundraiser: React.FC = () => {
    const [fundraisers, setFundraisers] = useState<IFundraiserCard[]>([]);

    const fetchFundraisers = async () => {
        try {
            const data = await getAllFundraiser();
            setFundraisers(data);
        } catch (error) {
            console.error('Error fetching fundraisers:', error);
        }
    };

    fetchFundraisers();
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
                        <h4 className='text-gray-700'>Всього зборів : {fundraisers.length}</h4>
                    </section>
                </section>


                <ul className='w-full mt-10'>
                    {fundraisers.map(item => (
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
