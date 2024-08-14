'use client'

import React, {useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Modal } from 'antd';
import { CheckCode } from "@/components/auth/register/CheckCode";
import {IRegForm, onRegSubmit} from "@/components/auth/register/RegForm.func";
import Input from "@/components/tollbox/input/Input";



export const RegForm: React.FC = () => {
    const { register, handleSubmit, watch, reset } = useForm<IRegForm>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        reset();
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onSubmit: SubmitHandler<IRegForm> = (data) => {
        onRegSubmit(data, showModal);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input type="text"
                   register={register}
                   name="username"
                   label="Прізвище та Імʼя: "
            />

            <Input type="email"
                   register={register}
                   name="email"
                   label="Електронна пошта: "
            />

            <Input type="password"
                   register={register}
                   name="password"
                   label="Пароль: "
            />

            <Input type="password"
                   register={register}
                   name="repeatPassword"
                   label="Повторіть пароль: "
            />

            <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[]}
            >
                <CheckCode/>
            </Modal>
            <section className='flex justify-center mt-10'>
                <button type='submit'
                        className="text-xl border-black border-b-2 p-3 w-[300px] flex justify-center hover:scale-110 duration-100">
                    Зареєструватися
                </button>
            </section>
        </form>
    );
};

export default RegForm;
