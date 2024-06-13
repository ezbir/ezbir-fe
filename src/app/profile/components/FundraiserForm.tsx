'use client'

import {FormEvent, useState} from "react";
import Select, {StylesConfig} from 'react-select';

//User imports
import {formData} from "@/app/profile/components/CreateFundraiserMenu";

interface FundraiserFormProps {
    id: string,
    submit: (e: FormEvent<HTMLFormElement>, data: formData) => void,
}

const options = [
    {value: 'Medical_Supplies_Equipment', label: 'Медичне обладнання'},
    {value: 'Support_Military_Forces', label: 'Підтримка військових'},
    {value: 'Psychological_Support', label: 'Психологічна підтримка'},
    {value: 'Education_Training', label: 'Навчання'},
    {value: 'Emergency_Medical_Assistance', label: 'Невідкладна медична допомога'},
    {value: 'Child_Protection', label: 'Захист дітей'},
    {value: 'Environmental_Safety', label: 'Екологія'},
    {value: 'Cyber_Security', label: 'Кібербезпека'},
    {value: 'Infrastructure_Restoration', label: 'Інфраструктура'},
    {value: 'Housing_Conditions', label: 'Житло'},
    {value: 'Support_Vulnerable_Groups', label: 'Підтримка вразливих груп людей'},
    {value: 'OTHER', label: 'Інше'},
];

const customStyles: StylesConfig = {
    control: (provided, state) => ({
        ...provided,
        width: '100%', // Add this line to make it full-width
        backgroundColor: '#E5E7EB', // Add this line to set the background color
        fontSize: '25px', // Add this line to set the font size
        padding: '1rem', // Add this line to set the padding
        border: 'none',
        borderRadius: '0px',
        "&:hover": {
            outline: 'none',
        }
    }),
};
const FundraiserForm: React.FC<FundraiserFormProps> = ({id, submit}) => {
    const [formData, setFormData] = useState<formData>({
        name: '',
        jar_link: '',
        amount: NaN,
        description: '',
        categories: [],
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

    const handleSumaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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


    return (
        <form id={id} onSubmit={handleSubmit}>
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
                    Посилання на банку:
                    <input className={inputStyle}
                           type="text"
                           placeholder='monobank.com/testlink'
                           value={formData.jar_link}
                           onChange={handleJarLinkChange}
                    />
                </label>
            </section>

            <label>
                Сума:
                <input className={inputStyle}
                       type="number"
                       placeholder='450 000'
                       value={formData.amount}
                       onChange={handleSumaChange}
                />
            </label>
            <label>
                Категорії:
                <Select
                    options={options}
                    isMulti
                    onChange={handleCategoriesChange}
                    styles={customStyles}
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


        </form>
    );
};

export default FundraiserForm;
