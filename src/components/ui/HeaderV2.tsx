import Link from "next/link";
import Logo from "@/components/ui/Logo";

const HeaderV2: React.FC = () =>{
    return(
        <header className='w-full h-auto bg-white p-7 border-b border-black'>
            <section className='flex-grow flex items-center'>
                <Link className='flex ml-4 w-36' href='/profile'>
                    <h6 className=' hover:border-b hover:border-black'>← Назад</h6>
                </Link>
                <section className="hidden w-full md:block">
                    <Logo/>
                </section>
            </section>
        </header>
    );
};

export default HeaderV2;
