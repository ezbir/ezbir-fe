import Link from "next/link";

const HeaderV2: React.FC = () =>{
    return(
        <header className='w-full bg-white p-7 border-b border-black'>
            <section className='flex-grow flex items-center'>
                <Link className='flex ml-4 w-[400px]' href='/public'>
                    <h6 className=' hover:border-b hover:border-black'>← Повернутись на сайт</h6>
                </Link>

                <section className='flex-grow'>
                    <h1 className='float-right'>
                    <span className='bg-black text-white text-[56px] pt-2 pb-2 pl-5 pr-5 m-2  rounded-[20px]'>
                        Є
                    </span>
                        <span className='text-[56px] m-2'>
                        Збір
                    </span>
                    </h1>
                </section>
            </section>
        </header>
    );
};

export default HeaderV2;
