export const TextareaForm = ({ placeholder }: { placeholder: string }) => {
    return (
        <>
            <textarea
                name="message"
                className="h-[100px] btn-base md:h-[150px]"
                placeholder={placeholder}
                required
            />
        </>
    );
};
