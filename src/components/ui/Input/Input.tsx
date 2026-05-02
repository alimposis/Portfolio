import { HTMLInputTypeAttribute, useEffect } from 'react';

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
            <input name={name} className="btn-base h-[40px]" type={type} placeholder={text} />
        </>
    );
};
