'use client'

import Button from "@/components/Button";
import React, {ChangeEvent, FormEvent, useState} from "react";
import {Modal } from 'antd';
import { CheckCode } from "@/components/auth/register/CheckCode";
import {onRegSubmit} from "@/components/auth/register/RegForm.func";

export const RegForm: React.FC = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [username, setUserName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')

    const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
    }
    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const onPasswordChange = (e:ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const onRepeatPasswordChange = (e:ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(e.target.value)
    }
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onRegSubmit(username, email, password, repeatPassword, showModal)
    }


    return (
        <form onSubmit={onSubmit}>
            <input className='w-full border-b-2 border-black p-1 mt-3 mb-3'
                   type="text"
                   placeholder='Іван Петренко'
                   value={username}
                   onChange={onUsernameChange}
            />
            <input className='w-full border-b-2 border-black p-1 mt-3 mb-3'
                   type="email"
                   placeholder='ezbir@gmail.com'
                   value={email}
                   onChange={onEmailChange}
            />
            <input className='w-full border-b-2 border-black p-1 mt-3 mb-3'
                   type="password"
                   placeholder='Пароль'
                   value={password}
                   onChange={onPasswordChange}
            />
            <input className='w-full border-b-2 border-black p-1 mt-3 mb-3'
                   type="password"
                   placeholder='Повторіть пароль'
                   value={repeatPassword}
                   onChange={onRepeatPasswordChange}
            />

            <Modal
                   open={isModalOpen}
                   onOk={handleOk}
                   onCancel={handleCancel}
                   footer={[]}>
                <CheckCode/>
            </Modal>
            <Button className='m-auto mt-3' primary value="Зареєструватися"/>
        </form>
    )
};