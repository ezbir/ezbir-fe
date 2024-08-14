
import React from "react";
import { RegForm } from "@/components/auth/register/RegForm";
import { OtherAuth } from "@/components/auth/OtherAuth";
import {useRouter} from "next/navigation";
import LoginForm from "@/components/auth/login/LoginForm";

const Register: React.FC = (props) => {

    return (
        <article className='w-full md:w-3/4 bg-white flex flex-col items-center'>
            <section className='hidden md:block mt-[100px]'>
                <h3>Реєстрація в додатку</h3>
            </section>
            <section className='md:hidden mt-[100px]'>
                <h3>Реєстрація</h3>
            </section>
            <section className='w-3/4'>
                <RegForm/>
            </section>
            <section
                className='flex flex-col items-center justify-around h-1/3 w-full mt-[50px] md:mt-[100px] md:flex-row md:justify-around '>
                <OtherAuth value='Увійти з Дія.Підпис' link='/diia'/>
                <OtherAuth value='Авторизаця' link='/auth/login'/>
            </section>
        </article>
)
    ;
};

export default Register;
