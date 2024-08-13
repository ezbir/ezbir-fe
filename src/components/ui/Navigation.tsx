'use client'

import { useState } from 'react';
import Link from "next/link";

const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className='flex flex-col md:flex-row items-start'>
            {/* Навігаційна кнопка для мобільних пристроїв */}
            <button onClick={toggleMenu} className='flex justify-center w-full md:hidden p-2'>
                → Навігація ←
            </button>

            {/* Модальне меню */}
            <div className={`fixed inset-0 bg-white z-50 md:hidden transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button onClick={toggleMenu} className='absolute top-4 right-4 p-2'>
                    ← Назад
                </button>
                <ul className='flex flex-col items-center mt-16'>
                    <li className='py-4'><Link href='/'>Головна</Link></li>
                    <li className='py-4'><Link href='/fundraiser'>Збори</Link></li>
                    <li className='py-4'><Link href='/volunteers'>Волонтери</Link></li>
                    <li className='py-4'><Link href='/support'>Підтримка</Link></li>
                    <li className='py-4'><Link href='/profile'>Профіль</Link></li>
                    {window.sessionStorage.getItem('auth_token') &&
                        <li className='py-4'><Link href='/setting/account'>Налаштування</Link></li>
                    }
                </ul>

                <ul className="flex justify-center mt-10">
                    <li><img className="mx-1" src="/img/fbBlack.svg" alt="Facebook"/></li>
                    <li><img className="mx-1" src="/img/instagramBlack.svg" alt="Instagram"/></li>
                    <li><img className="mx-1" src="/img/telegramBlack.svg" alt="Telegram"/></li>
                    <li><img className="mx-1" src="/img/twitterBlack.svg" alt="Twitter"/></li>
                </ul>
            </div>

            {/* Навігація по сторінках на великих екранах */}
            <section className='hidden md:flex w-full items-center mt-10'>
                <section className='hidden md:flex w-2/3'>
                    <ul className='flex w-full justify-around'>
                        <li><Link href='/'>Головна</Link></li>
                        <li><Link href='/fundraiser'>Збори</Link></li>
                        <li><Link href='/volunteers'>Волонтери</Link></li>
                        <li><Link href='/support'>Підтримка</Link></li>
                        <li><Link href='/profile'>Профіль</Link></li>
                    </ul>
                </section>

                {/* Навігація по соц мережах на великих екранах */}
                <section className='hidden md:flex w-1/3'>
                    <ul className='flex w-full justify-around'>
                        <li><img src="/img/fbBlack.svg" alt="Facebook"/></li>
                        <li><img src="/img/instagramBlack.svg" alt="Instagram"/></li>
                        <li><img src="/img/telegramBlack.svg" alt="Telegram"/></li>
                        <li><img src="/img/twitterBlack.svg" alt="Twitter"/></li>
                    </ul>
                </section>
            </section>
        </nav>
    );
};

export default Navigation;
