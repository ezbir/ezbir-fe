'use client'

import {FormEvent} from "react";
import {useForm, Controller} from "react-hook-form";
import Select, {StylesConfig} from 'react-select';

// User imports
import {IFundraiserForm} from "@/components/fundraiser/IFundraiser";

interface FundraiserFormProps {
    id: string,
    submit: (e: FormEvent<HTMLFormElement>, data: IFundraiserForm) => void,
}

export const options = [
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

const CreateFundraiserForm: React.FC<FundraiserFormProps> = ({id, submit}) => {
    const { register, handleSubmit, control, getValues } = useForm<IFundraiserForm>({
        defaultValues: {
            categories: []
        }
    });

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit((data: IFundraiserForm) => submit(e, data))();
    };

    let inputStyle: string = 'w-full bg-gray-200 border-black text-2xl p-4 m-1';

    return (
        <form id={id} onSubmit={handleFormSubmit}>
            <section className="flex justify-around">
                <label className='w-full m-1'>
                    Назва Збору:
                    <input className={inputStyle}
                           type="text"
                           placeholder='Для 3-ої штурмової бригади'
                           {...register("name")}
                    />
                </label>
                <label className='w-full m-1'>
                    Сума:
                    <input className={inputStyle}
                           type="number"
                           placeholder='450 000'
                           {...register("amount")}
                    />
                </label>
            </section>
            <label>
                Посилання на банку:
                <input className={inputStyle}
                       type="text"
                       placeholder='monobank.com/testlink'
                       {...register("jar_link")}
                />
            </label>
            <label>
                Категорії:
                <Controller
                    name="categories"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            options={options}
                            isMulti
                            styles={customStyles}
                            placeholder="Оберіть одну або декілька категорій"
                            value={options.filter(option => field.value?.includes(option.value))}
                            onChange={(selectedOptions) => field.onChange(selectedOptions.map((option: any) => option.value))}
                        />
                    )}
                />
            </label>
            <label>
                Опис:
                <textarea className='w-full bg-gray-200 border-black text-2xl p-4 m-1 h-[200px]'
                          placeholder='На закупівлю дронів та медикаментів для військових'
                          {...register("description")}
                />
            </label>
        </form>
    );
};

export default CreateFundraiserForm;
