import {Controller, useForm} from "react-hook-form";
import Select, {StylesConfig} from "react-select";
import {options} from "@/components/fundraiser/CreateFundraiserForm";
import {IFundraiserForm, IFundraiserFormProps} from "@/components/fundraiser/IFundraiser";
import {FormEvent} from "react";


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


const FundraiserForm: React.FC<IFundraiserFormProps> = ({id, submit, register, handleSubmit, control, values}) =>{
    let inputStyle: string = 'w-full bg-gray-200 border-black text-2xl p-4 m-1';

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit((data: IFundraiserForm) => {
            submit(data);
        })(e);
    };

    return (
        <form id={id} onSubmit={onSubmit}>
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
                    render={({field}) => (
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

export default FundraiserForm;
