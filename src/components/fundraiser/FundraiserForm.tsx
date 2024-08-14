import React, { useEffect } from "react";
import { Controller } from "react-hook-form";
import Select, { StylesConfig } from "react-select";
import { IFundraiserForm, IFundraiserFormProps } from "@/components/fundraiser/IFundraiser";
import { options } from "@/components/fundraiser/CreateFundraiserForm";
import Input from "@/components/tollbox/input/Input";
import TextArea from "@/components/tollbox/textarea/TextArea";

const customStyles: StylesConfig = {
    control: (provided) => ({
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
            <section className="flex flex-col md:flex-row justify-around">
                <Input type="text" register={register} name="name" label="Назва збору:"/>
                <Input type="text" register={register} name="amount" label="Сума:"/>
            </section>
            <Input type="text" register={register} name="jar_link" label="Посилання на банку:"/>

            <TextArea register={register} name="description" label="Опис:"/>

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
