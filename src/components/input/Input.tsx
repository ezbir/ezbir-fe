import React from "react";
import {IInput} from "@/components/input/Input.func";

const Input: React.FC<IInput> = ({type,register, name, label}) =>{
    return(
        <section className="relative z-0 w-full ml-1 mt-2">
            <input className='block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                   id={name}
                   type={type}
                   placeholder=' '
                   {...register(`${name}`)}
            />
            <label htmlFor={name} className='absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'>
                {label}
            </label>
        </section>
    );
};

export default Input;
