import { HTMLInputTypeAttribute } from 'react';

import InputStyle from './Input.module.scss';

export const Input = ({ type, text }: { type: HTMLInputTypeAttribute; text: string }) => {
    return (
        <>
            <input className={InputStyle.input} type={type} placeholder={text} />
        </>
    );
};
