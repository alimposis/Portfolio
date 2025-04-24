import { useFormStatus } from 'react-dom';
import ButtonStyle from './Button.module.scss';

export const Button = ({ text }: { text: string }) => {
    const { pending } = useFormStatus();
    return (
        <>
            <button className={ButtonStyle.button} disabled={pending}>
                {text}
            </button>
        </>
    );
};
