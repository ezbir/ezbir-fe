'use client'
import React, { useState } from 'react';

interface FAQProps {
    title: string;
    description: string;
}

const FAQ: React.FC<FAQProps> = ({title, description}) => {
    const [isVisible, setIsVisible] = useState(false);

    const onViewDescription = () => {
        setIsVisible(!isVisible)
    };

    return (
        <section className='w-[80%] flex flex-col mt-3'>
            <section
                className='flex justify-between items-center bg-gray-200 rounded p-5 cursor-pointer'
                onClick={onViewDescription}
            >
                <h3 className="text-xl md:text-2xl lg:text-3xl">{title}</h3>
                <div className='mr-4'>{isVisible ? `/\\` : '\\/'}</div>
            </section>
            {isVisible && (
                <section className='p-5 bg-gray-100 text-xs md:text-base'>
                    {description}
                </section>
            )}
        </section>
    );
};

export default FAQ;
