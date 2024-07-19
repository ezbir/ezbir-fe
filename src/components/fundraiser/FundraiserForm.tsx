import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Select, { StylesConfig } from "react-select";
import { IFundraiserForm, IFundraiserFormProps } from "@/components/fundraiser/IFundraiser";
import { options } from "@/components/fundraiser/CreateFundraiserForm";

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

const FundraiserForm: React.FC<IFundraiserFormProps> = ({ initialValues, submit, register, handleSubmit, control, values, onCloseForm }) => {
    useEffect(() => {
        if (initialValues) {
            if (initialValues.name !== undefined) {
                values("name", initialValues.name);
            }
            if (initialValues.amount !== undefined) {
                values("amount", initialValues.amount);
            }
            if (initialValues.jar_link !== undefined) {
                values("jar_link", initialValues.jar_link);
            }
            if (initialValues.categories !== undefined) {
                values("categories", initialValues.categories);
            }
            if (initialValues.description !== undefined) {
                values("description", initialValues.description);
            }
        }
    }, [initialValues, values]);

    const inputStyle: string = 'w-full bg-gray-200 border-black text-2xl p-4 m-1';

    const onSubmit = (data: IFundraiserForm) => {
        submit(data);
    };

    const onClose = () => {
        onCloseForm();
    };

    const onButtonClick = () => {
        handleSubmit(onSubmit)();
    };

    return (
        <form>
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
                            onChange={(selectedOptions) => field.onChange(selectedOptions ? selectedOptions.map((option: any) => option.value) : [])}
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
            <section className='flex justify-end'>
                <button
                    className="border border-red-500 hover:border-red-600 text-red-500 py-2 px-4 m-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    onClick={onClose} type='button'>
                    Скасувати
                </button>
                <button
                    className="border border-green-500 hover:border-green-600 text-green-500 py-2 px-4 m-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    type='button'
                    onClick={onButtonClick}>
                    Зберегти
                </button>
            </section>
        </form>
    );
};

export default FundraiserForm;
