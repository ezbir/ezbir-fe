const Footer: React.FC = (props) =>{
    return(
        <footer className='bg-black text-white w-full h-[300px] flex flex-col items-center'>
            <section className='flex justify-center mt-10'>
                <img className='m-[7px]' src="/img/coatOfArms.svg" alt=""/>
                <h1>
                    <span className='bg-white text-black text-[40px] pt-2 pb-2 pl-4 pr-4 rounded-[18px]'>
                        Є
                    </span>
                    <span className='text-[40px]  ml-2'>
                        Збір
                    </span>
                </h1>
            </section>
            <section className='w-full max-w-md'>
                <h5 className='text-center text-lg mb-4'>Слідкуй за нами тут:</h5>
                <ul className='flex justify-around space-x-4'>
                    <li><img className='size-9' src="/img/fbWhite.svg" alt="Facebook"/></li>
                    <li><img className='size-9' src="/img/instagramWhite.svg" alt="Instagram"/></li>
                    <li><img className='size-9' src="/img/telegramWhite.svg" alt="Telegram"/></li>
                    <li><img className='size-9' src="/img/twitterWhite.svg" alt="Twitter"/></li>
                </ul>
            </section>
        </footer>
    );
};

export default Footer;
