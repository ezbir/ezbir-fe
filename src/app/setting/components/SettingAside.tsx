'use client'

import Link from "next/link";

const SettingAside: React.FC = (props) =>{

    const hundleExit = ()  =>{
        sessionStorage.clear()
        window.location.href = '/';
    }

    return(
        <aside className='w-1/4 p-10 flex flex-col justify-between items-center'>
            <ul className='flex flex-col'>
                <Link className='text-xl mt-4' href='/setting/account'>Параметри облікового запису</Link>
                <Link className='text-xl mt-4' href='/setting/security'>Вхід і безпека</Link>
            </ul>

            <button onClick={hundleExit} className='text-xl text-red-400 border-red-400 border-b-2 p-3 w-[200px] flex justify-center hover:scale-110 duration-100'>Вихід</button>
        </aside>
    );
};

export default SettingAside;
