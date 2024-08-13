import Navigation from "@/components/ui/Navigation";

const Header: React.FC = () => {
    return (
        <header className='bg-[#7c7bff] p-4 pt-5 lg:pt-10 h-auto flex flex-col'>
            {/* Заголовок */}
            <section
                className='flex flex-col md:flex-row items-center md:items-start justify-between '>
                {/* Ліва частина */}
                <section className='hidden md:flex items-center ml-10'>
                    <img className='w-6 h-10' src="/img/blazon.svg" alt=""/>
                    <h2 className='ml-4'>
                        Збираємо разом. Рятуємо життя
                    </h2>
                </section>

                {/* Права частина */}
                <section className='flex-grow'>
                    <h1 className='md:float-right md:mr-10'>
                    <span className='bg-black text-white text-[56px] pt-2 pb-2 pl-5 pr-5 m-2 rounded-[20px]'>
                        Є
                    </span>
                        <span className='text-[56px] m-2'>
                        Збір
                    </span>
                    </h1>
                </section>

                <section className='w-full flex flex-col items-center justify-center mt-2 md:hidden'>
                    <h2 className='text-2xl text-center'>
                        Збираємо разом. Рятуємо життя
                    </h2>
                    <img className='w-6 h-10' src="/img/blazon.svg" alt=""/>

                </section>
            </section>

            {/* Навігація */
            }
            <section className='mt-4'>
                <Navigation/>
            </section>
        </header>
    )
        ;
};

export default Header;
