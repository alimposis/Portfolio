import TextareaStyle from './TextareaForm.module.scss';
export const TextareaForm = () => {
    return (
        <>
            <textarea
                name="message"
                id=""
                className={TextareaStyle.textarea}
                placeholder="Write a message"
                required
            />
        </>
    );
};
