
import React from "react";
import RegForm from "@/app/auth/register/components/RegForm";
import OtherAuth from "@/app/auth/components/OtherAuth";
import {useRouter} from "next/navigation";

const Register: React.FC = (props) => {

    return (
        <article className='w-3/4 bg-white flex flex-col items-center'>
            <section className='mt-[100px]'>
                <h3>Реєстрація в додатку</h3>
            </section>
            <section className='w-3/4'>
                <RegForm/>
            </section>
            <section className='flex w-full justify-around mt-[100px]'>
                <OtherAuth value='Увійти з Дія.Підпис' link='/diia'/>
                <OtherAuth value='Авторизація' link='/auth/login'/>
            </section>

        </article>
    );
};

export default Register;
