const Logo: React.FC = (props) =>{
    return(
        <section className='flex-grow'>
            <h1 className='md:float-right md:mr-10'>
                    <span
                        className='bg-black text-white text-[40px] pt-2 pb-2 pl-4 pr-4 rounded-[18px] md:text-[56px] md:pt-2 md:pb-2 md:pl-5 md:pr-5 md:m-2 md:rounded-[20px]'>
                        Є
                    </span>
                <span className='text-[40px] m-2 md:text-[56px]'>
                        Збір
                    </span>
            </h1>
        </section>
    );
};

export default Logo;
