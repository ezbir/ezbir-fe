'use client'

import Button from "@/components/Button";
import React, {ChangeEvent, FormEvent, useState} from "react";
import {onLoginSubmit} from "@/components/auth/login/LoginForm.func";

const LoginForm: React.FC = (props) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onLoginSubmit(email, password, setError)
    }
    return (
        <form onSubmit={onSubmit}>
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
            <p className='text-red-400 flex justify-center'>{error}</p>
            <Button className='m-auto mt-3' primary value="Увійти"/>
        </form>
    );
};

export default LoginForm;
