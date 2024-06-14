'use client'

import {EventHandler, FormEvent, useState} from "react";
import Select, {StylesConfig} from 'react-select';

//User imports
import {FundraiserEditData} from "@/components/FundraiserEdit";
import {options} from "@/app/profile/components/FundraiserForm";
import button from "@/components/Button";
import axios from "axios";

interface FundraiserFormProps extends FundraiserEditData{
    submit: (e: FormEvent<HTMLFormElement>, data: FundraiserEditData) => void,
}



const customStyles: StylesConfig = {
    control: (provided, state) => ({
        ...provided,
        width: '100%',
        backgroundColor: '#E5E7EB',
        fontSize: '25px',
        padding: '1rem',
        border: 'none',
        borderRadius: '0px',

        "&:hover": {
            outline: 'none',
        }
    }),
};
const FundraiserForm: React.FC<FundraiserFormProps> = ({id, amount, name, jar_link, description, is_closed, categories ,  submit}) => {

    const [formData, setFormData] = useState<FundraiserEditData>({
        amount: amount,
        name: name,
        jar_link: jar_link,
        description: description,
        is_closed: is_closed,
        categories: categories,
    });

    let inputStyle: string = 'w-full bg-gray-200 border-black text-2xl p-4 m-1'

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevState => ({
            ...prevState,
            name: e.target.value
        }));
    };

    const handleJarLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevState => ({
            ...prevState,
            jar_link: e.target.value
        }));
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prevState => ({
            ...prevState,
            amount: parseFloat(e.target.value)
        }));
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData(prevState => ({
            ...prevState,
            description: e.target.value
        }));
    };

    const handleCategoriesChange = (selectedOptions: any) => {
        setFormData(prevState => ({
            ...prevState,
            categories: selectedOptions ? selectedOptions.map((option: any) => option.value) : []
        }));
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        submit(e, formData);
    };

    const handleClosedFundraiser = () =>{
        setFormData(prevState => ({
            ...prevState,
            is_closed: !formData.is_closed
        }));
    }

    const deleteFundraiser = () =>{
        axios.delete(`http://localhost:8080/api/fundraisers/${id}`, {
            headers: {
                Authorization: `Bearer ${window.sessionStorage.getItem('auth_token')}`,
            },
            withCredentials: true,
        })
    }

    const selectedCategories = options.filter(option => formData.categories.includes(option.value));


    return (
        <form onSubmit={handleSubmit}>
            <section className="flex justify-around">
                <label className='w-full m-1'>
                    Назва Збору:
                    <input className={inputStyle}
                           type="text"
                           placeholder='Для 3-ої штурмової бригади'
                           value={formData.name}
                           onChange={handleNameChange}
                    />
                </label>
                <label className='w-full m-1'>
                    Сума:
                    <input className={inputStyle}
                           type="number"
                           placeholder='450 000'
                           value={formData.amount}
                           onChange={handleAmountChange}
                    />
                </label>
            </section>
            <label >
                Посилання на банку:
                <input className={inputStyle}
                       type="text"
                       placeholder='monobank.com/testlink'
                       value={formData.jar_link}
                       onChange={handleJarLinkChange}
                />
            </label>

            <label>
                Категорії:
                <Select
                    options={options}
                    isMulti
                    onChange={handleCategoriesChange}
                    styles={customStyles}
                    value={selectedCategories}
                    placeholder="Оберіть одну або декілька категорій"
                />
            </label>
            <label>
                Опис:
                <textarea className='w-full bg-gray-200 border-black text-2xl p-4 m-1 h-[200px]'
                          placeholder='На закупівлю дронів та медикаментів для військових'
                          value={formData.description}
                          onChange={handleDescriptionChange}
                />
            </label>

            {formData.is_closed
                ? <button className='text-red-400 border-red-400 border-2 p-3 rounded' onClick={handleClosedFundraiser}>Відкрити збір</button>
                : <button className='text-green-300 border-green-300 border-2 p-3 rounded' onClick={handleClosedFundraiser}>Закрити збір</button>}
            <button onClick={deleteFundraiser} className='text-red-400 border-red-400 border-2 p-3 rounded'>
                Видалити збір
            </button>
        </form>
    );
};

export default FundraiserForm;
