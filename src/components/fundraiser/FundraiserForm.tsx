import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Select, { StylesConfig } from "react-select";
import { IFundraiserForm, IFundraiserFormProps } from "@/components/fundraiser/IFundraiser";
import { options } from "@/components/fundraiser/CreateFundraiserForm";

const customStyles: StylesConfig = {
    control: (provided, state) => ({
        ...provided,
        width: '100%',
        fontSize: '25px',
        border: 'none',
        borderBottom: '1px solid #333',
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

    const inputStyle: string = 'block px-2.5 pb-2.5 pt-5 w-full text-xl text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer';
    const labelStyle: string = 'absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto';


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
                <section className="relative z-0 w-full mr-1 mt-2">
                    <input className={inputStyle}
                           id="floating_standard"
                           type="text"
                           placeholder=' '
                           {...register("name")}
                    />
                    <label htmlFor="floating_standard" className={labelStyle}>
                        Назва збору:
                    </label>
                </section>
                <section className="relative z-0 w-full ml-1 mt-2">
                    <input className={inputStyle}
                           id="floating_standard"
                           type="text"
                           placeholder=' '
                           {...register("amount")}
                    />
                    <label htmlFor="floating_standard" className={labelStyle}>
                        Сума:
                    </label>
                </section>
            </section>
            <section className="relative z-0 mt-2">
                <input className={inputStyle}
                       id="floating_standard"
                       type="text"
                       placeholder=' '
                       {...register("jar_link")}
                />
                <label htmlFor="floating_standard" className={labelStyle}>
                    Посилання на банку:
                </label>
            </section>

            <section className="relative z-0 mt-2">
                <textarea
                    id='floating_standard'
                    className='block px-2.5 pb-2.5 pt-5 w-full text-xl text-gray-900 bg-gray-100 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer h-[200px]'
                    placeholder=' '
                    {...register("description")}
                />
                <label htmlFor='floating_standard' className={labelStyle}>
                    Опис:
                </label>

            </section>
            <section className="relative mt-2">
                <label className='text-xl'>
                    Категорії:
                </label>
                <Controller
                    name="categories"
                    control={control}
                    render={({field}) => (
                        <Select
                            {...field}
                            options={options}
                            isMulti
                            styles={customStyles}
                            placeholder="Оберіть одну або декілька категорій"
                            id="floating_standard"
                            value={options.filter(option => field.value?.includes(option.value))}
                            onChange={(selectedOptions) => field.onChange(selectedOptions ? selectedOptions.map((option: any) => option.value) : [])}
                        />
                    )}
                />
            </section>


            <section className='flex justify-end mt-2 z-0'>
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
