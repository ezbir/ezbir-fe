'use client'

import Button from "@/components/Button";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginForm, onLoginSubmit } from "@/components/auth/login/LoginForm.func";


const LoginForm: React.FC = (props) => {
    const { register, handleSubmit } = useForm<ILoginForm>();

    const onSubmit: SubmitHandler<ILoginForm> = (data) => {
        onLoginSubmit(data);
    };

    const inputStyle: string = 'block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer';
    const labelStyle: string = 'absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto';


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section className="relative z-0 w-full ml-1 mt-2">
                <input className={inputStyle}
                    id="floating_standard"
                    type="text"
                    placeholder=' '
                    {...register("email")}
                />
                <label htmlFor="floating_standard" className={labelStyle}>
                    Електронна пошта:
                </label>
            </section>

            <section className="relative z-0 w-full ml-1 mt-2">
                <input className={inputStyle}
                    id="floating_standard"
                    type="password"
                    placeholder=' '
                    {...register("password")}
                />
                <label htmlFor="floating_standard" className={labelStyle}>
                    Пароль:
                </label>
            </section>

            <section className='flex justify-center mt-10'>
                <button type='submit'
                    className="text-xl border-black border-b-2 p-3 w-[200px] flex justify-center hover:scale-110 duration-100">
                    Увійти
                </button>
            </section>

        </form>
    );
};

export default LoginForm;
