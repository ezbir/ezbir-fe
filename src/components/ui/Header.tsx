import Navigation from "@/components/ui/Navigation";
import Logo from "@/components/ui/Logo";

const Header: React.FC = () => {
    return (
        <header className='bg-[#7c7bff] p-4 pt-5 lg:pt-10 h-auto flex flex-col'>
            <section
                className='flex flex-col md:flex-row items-center md:items-start justify-between '>
                <section className='hidden md:flex items-center ml-10'>
                    <img className='w-6 h-10' src="/img/blazon.svg" alt=""/>
                    <h2 className='ml-4'>
                        Збираємо разом. Рятуємо життя
                    </h2>
                </section>

                <Logo/>

                <section className='w-full flex flex-col items-center justify-center mt-2 md:hidden'>
                    <h2 className='text-2xl text-center'>
                        Збираємо разом. Рятуємо життя
                    </h2>
                    <img className='w-6 h-10' src="/img/blazon.svg" alt=""/>
                </section>
            </section>

            <section className='mt-4'>
                <Navigation/>
            </section>
        </header>
    )
        ;
};

export default Header;
