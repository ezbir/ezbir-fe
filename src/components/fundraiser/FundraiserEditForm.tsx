'use client';

import Select, { StylesConfig } from 'react-select';
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

// User imports
import { IFundraiserEdit } from "@/components/fundraiser/IFundraiser";
import { options } from "@/components/fundraiser/CreateFundraiserForm";
import {onDeleteFundraiser} from "@/components/fundraiser/FundraiserEditForm.func";


interface FundraiserFormProps extends IFundraiserEdit {
    submit: (data: IFundraiserEdit) => void,
}

const customStyles: StylesConfig = {
    control: (provided) => ({
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

const FundraiserForm: React.FC<FundraiserFormProps> = ({ id, amount, name, jar_link, description, is_closed, categories, submit }) => {
    const { register, handleSubmit, control, setValue } = useForm<IFundraiserEdit>({
        defaultValues: {
            amount,
            name,
            jar_link,
            description,
            is_closed,
            categories,
        }
    });

    const onSubmit = (data: IFundraiserEdit) => {
        submit(data);
    };


    const handleClosedFundraiser = () => {
        setValue('is_closed', !is_closed);
    };

    const onDelete = () => {
        onDeleteFundraiser(id)
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section className="flex justify-around">
                <label className='w-full m-1'>
                    Назва Збору:
                    <input
                        className='w-full bg-gray-200 border-black text-2xl p-4 m-1'
                        type="text"
                        placeholder='Для 3-ої штурмової бригади'
                        {...register("name")}
                    />
                </label>
                <label className='w-full m-1'>
                    Сума:
                    <input
                        className='w-full bg-gray-200 border-black text-2xl p-4 m-1'
                        type="number"
                        placeholder='450 000'
                        {...register("amount", { valueAsNumber: true })}
                    />
                </label>
            </section>
            <label>
                Посилання на банку:
                <input
                    className='w-full bg-gray-200 border-black text-2xl p-4 m-1'
                    type="text"
                    placeholder='monobank.com/testlink'
                    {...register("jar_link")}
                />
            </label>

            <label>
                Категорії:
                <Controller
                    control={control}
                    name="categories"
                    render={({ field }) => (
                        <Select
                            options={options}
                            isMulti
                            onChange={(selectedOptions) => field.onChange(selectedOptions.map((option:any) => option.value))}
                            styles={customStyles}
                            value={options.filter(option => field.value.includes(option.value))}
                            placeholder="Оберіть одну або декілька категорій"
                        />
                    )}
                />
            </label>
            <label>
                Опис:
                <textarea
                    className='w-full bg-gray-200 border-black text-2xl p-4 m-1 h-[200px]'
                    placeholder='На закупівлю дронів та медикаментів для військових'
                    {...register("description")}
                />
            </label>

            <button type="button" onClick={handleClosedFundraiser} className={`p-3 rounded ${is_closed ? 'text-red-400 border-red-400 border-2' : 'text-green-300 border-green-300 border-2'}`}>
                {is_closed ? 'Відкрити збір' : 'Закрити збір'}
            </button>
            <button type="button" onClick={onDelete} className='text-red-400 border-red-400 border-2 p-3 rounded'>
                Видалити збір
            </button>
        </form>
    );
};

export default FundraiserForm;
