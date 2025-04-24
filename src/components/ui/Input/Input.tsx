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
            <input name={name} className={InputStyle.input} type={type} placeholder={text} />
        </>
    );
};
