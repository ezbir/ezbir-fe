'use client'

import { useForm, SubmitHandler } from "react-hook-form";

import {ILoginForm, onLoginSubmit} from "@/components/auth/login/LoginForm.func";
import Input from "@/components/tollbox/input/Input";


const LoginForm: React.FC = () => {
    const { register, handleSubmit } = useForm<ILoginForm>();

    const onSubmit: SubmitHandler<ILoginForm> = (data) => {
        onLoginSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input type="text"
                   register={register}
                   name="email"
                   label="Електронна пошта: "
            />

            <Input type="password"
                   register={register}
                   name="password"
                   label="Пароль: "
            />
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
