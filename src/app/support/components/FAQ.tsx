'use client'
import React, { useState } from 'react';

interface FAQProps {
    title: string;
    description: string;
}

const FAQ: React.FC<FAQProps> = ({title, description}) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleDescriptionVisibility = () => {
        setIsVisible(!isVisible)
    };

    return (
        <section className='w-[80%] flex flex-col mt-3'>
            <section
                className='flex justify-between items-center bg-gray-200 rounded p-5 cursor-pointer'
                onClick={toggleDescriptionVisibility}
            >
                <h2>{title}</h2>
                <div className='mr-4'>{isVisible ? `/\\` : '\\/'}</div>
            </section>
            {isVisible && (
                <section className='p-5 bg-gray-100'>
                    {description}
                </section>
            )}
        </section>
    );
};

export default FAQ;
