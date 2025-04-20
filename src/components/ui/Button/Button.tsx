import ButtonStyle from './Button.module.scss';

export const Button = ({ text }: { text: string }) => {
    return (
        <>
            <button className={ButtonStyle.button}>{text}</button>
        </>
    );
};
