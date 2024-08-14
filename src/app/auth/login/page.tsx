import React from "react";
import LoginForm from "@/components/auth/login/LoginForm";
import { OtherAuth } from "@/components/auth/OtherAuth";

const Login = () => {

    return (
        <article className='w-full md:w-3/4 bg-white flex flex-col items-center'>
            <section className='hidden md:block mt-[100px]'>
                <h3>Авторизація в додатку</h3>
            </section>
            <section className='md:hidden mt-[100px]'>
                <h3>Авторизація</h3>
            </section>
            <section className='w-3/4'>
                <LoginForm/>
            </section>
            <section
                className='flex flex-col items-center justify-around h-1/3 w-full mt-[50px] md:mt-[100px] md:flex-row md:justify-around '>
                <OtherAuth value='Увійти з Дія.Підпис' link='/diia'/>
                <OtherAuth value='Реєстрація' link='/auth/register'/>
            </section>
        </article>

    )

}

export default Login