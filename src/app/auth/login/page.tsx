import React from "react";
import LoginForm from "@/components/auth/login/LoginForm";
import { OtherAuth } from "@/components/auth/OtherAuth";

const Login = () => {

    return (
        <article className='w-3/4 bg-white flex flex-col items-center'>
            <section className='mt-[100px]'>
                <h3>Авторизація в додатку</h3>
            </section>
            <section className='w-3/4'>
                <LoginForm/>
            </section>
            <section className='flex w-full justify-around mt-[100px]'>
                <OtherAuth value='Увійти з Дія.Підпис' link='/diia'/>
                <OtherAuth value='Реєстрація' link='/auth/register'/>
            </section>
        </article>

    )

}

export default Login