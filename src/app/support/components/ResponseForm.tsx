import React from "react";
import Button from "@/components/Button";

const ResponseForm: React.FC = (props) =>{
    return(
        <>
            <h2 className=''>Залиши свій відгук</h2>
            <form className='flex flex-col mt-10'>
                <section className='flex'>
                    <input className='w-full bg-gray-200 border-black text-2xl p-4 m-1'
                           type="email"
                           placeholder='Email*'

                    />
                    <input className='w-full bg-gray-200 border-black text-2xl p-4 m-1'
                           type="text"
                           placeholder='Прізвище та імʼя*'

                    />
                </section>

                <textarea className='bg-gray-200 text-2xl p-4 h-[300px] mt-3' name="text"
                          placeholder="Введіть текст"></textarea>
                <div className="flex justify-center mt-2">
                    <Button className='flex justify-center' primary value='Відправити'/>
                </div>
            </form>
        </>

    );
};

export default ResponseForm;
