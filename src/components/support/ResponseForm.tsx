'use client'
import React from "react";
import Input from "@/components/tollbox/input/Input";
import {useForm} from "react-hook-form";
import TextArea from "@/components/tollbox/textarea/TextArea";

interface IResponseForm {
    email: string,
    username: string,
    message: string,
}

const ResponseForm: React.FC = () =>{
    const { register, handleSubmit } = useForm<IResponseForm>();

    const onSubmit = () =>{
        console.warn("response form")
    }

    return(
        <>
            <h2 className='flex justify-center md:block'>Залиши свій відгук</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-10'>

                <section className='flex flex-col md:flex-row'>
                    <Input type="email" register={register} name="email" label="Електронна пошта: "/>
                    <Input type="text" register={register} name="username" label="Прізвище та імʼя: "/>
                </section>

                <TextArea register={register} name="feeback" label="Ваш відгук:" />

                <section className='flex justify-center mt-5 md:mt-10'>
                    <button type='submit'
                            className="text-xl border-black border-b-2 p-3 w-[200px] flex justify-center hover:scale-110 duration-100">
                        Надіслати
                    </button>
                </section>
            </form>
        </>

    );
};

export default ResponseForm;
