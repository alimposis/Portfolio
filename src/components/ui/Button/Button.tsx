import { useFormStatus } from 'react-dom';

export const Button = ({ text }: { text: string }) => {
    const { pending } = useFormStatus();
    return (
        <>
            <button
                className={`px-4 py-3 border rounded-xl border-[var(--mainColor)] shadow-lg shadow-main-color w-fit ${
                    pending ? 'bg-[var(--mainColor)]' : 'bg-[var(--secondaryBackgroundColor)]'
                }`}
                disabled={pending}
            >
                {text}
            </button>
        </>
    );
};
