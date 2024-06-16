import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import axios from "axios";

const CheckCodeForm: React.FC = () => {
    const [checkCode, setCheckCode] = useState<string>('')
    const [redirect, setRedirect] = useState<boolean>(false);
    const [error, setError] = useState<string>('')
    const handleCheckCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckCode(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        axios.post(`http://localhost:8080/api/auth/verify?token=${checkCode}`, {

        }, { withCredentials: true })
            .then((response) => {
                console.log(response);
                if(response.status === 200){
                    setRedirect(true)
                }
            })
            .catch((error) => {
                setError('Неправильний код')
                setTimeout(() => {setError('')}, 3000)
            })
    }

    useEffect(() => {
        if (redirect) {
            window.location.href = "/login";
        }
    }, [redirect]);

    return (
        <form id='checkCode' onSubmit={handleSubmit}>
            <h4>Перевірка пошти</h4>
            <p className='text-gray-500'>Будь ласка введіть код підтвердження з електроної пошти</p>
            <input className='w-full border-b-2 border-black p-1 mt-3'
                   type="text"
                   placeholder='1234567890'
                   value={checkCode}
                   onChange={handleCheckCodeChange}
            />
            {error ? <p className='text-red-400 flex justify-center'>{error}</p> : ''}
            <section className='flex justify-center'>
                <button className='mt-3 border-2 pt-2 pb-2 pl-4 pr-4 rounded-[40px] bg-black text-white' type="submit">Відправити</button>
            </section>
        </form>
    );
};

export default CheckCodeForm;
