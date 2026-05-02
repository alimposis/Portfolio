export const TextareaForm = () => {
    return (
        <>
            <textarea
                name="message"
                className="h-[100px] btn-base md:h-[150px]"
                placeholder="Write a message"
                required
            />
        </>
    );
};
