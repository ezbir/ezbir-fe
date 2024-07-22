import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import {onCodeSubmit} from "@/components/auth/register/CheckCode.func";

export const CheckCode: React.FC = () => {
    const [code, setCode] = useState<string>('')
    const [redirect, setRedirect] = useState<boolean>(false);
    const [error, setError] = useState<string>('')
    const onCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCode(e.target.value)
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        onCodeSubmit(code, setRedirect, setError)
    }

    useEffect(() => {
        if (redirect) {
            window.location.href = "/auth/login";
        }
    }, [redirect]);

    return (
        <form id='checkCode' onSubmit={onSubmit}>
            <h4>Перевірка пошти</h4>
            <p className='text-gray-500'>Будь ласка введіть код підтвердження з електроної пошти</p>
            <input className='w-full border-b-2 border-black p-1 mt-3'
                   type="text"
                   placeholder='1234567890'
                   value={code}
                   onChange={onCodeChange}
            />
            {error ? <p className='text-red-400 flex justify-center'>{error}</p> : ''}
            <section className='flex justify-center'>
                <button className='mt-3 border-2 pt-2 pb-2 pl-4 pr-4 rounded-[40px] bg-black text-white' type="submit">Відправити</button>
            </section>
        </form>
    );
};