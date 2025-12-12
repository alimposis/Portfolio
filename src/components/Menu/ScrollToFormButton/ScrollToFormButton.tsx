import { Dispatch, SetStateAction } from 'react';

export const ScrollToFormButton = ({
    setStateMenu,
}: {
    setStateMenu?: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <>
            <a
                href="#myForm"
                className="px-4 py-3 border rounded-xl border-[var(--mainColor)] bg-[var(--mainColor)] shadow-lg shadow-main-color w-fit"
                onClick={setStateMenu ? () => setStateMenu(false) : undefined}
            >
                Reverse form
            </a>
        </>
    );
};
