import { HTMLInputTypeAttribute, useEffect } from 'react';

import InputStyle from './Input.module.scss';

export const Input = ({
    type,
    text,
    name,
}: {
    type: HTMLInputTypeAttribute;
    text: string;
    name: string;
}) => {
    useEffect(() => {
        console.log('Ререндер');
    }, []);

    return (
        <>
            <input
                name={name}
                className="outline-none h-[40px] w-full bg-[var(--mainColor)] color-[var(--mainText)] border-2 rounded-lg px-2"
                type={type}
                placeholder={text}
            />
        </>
    );
};
