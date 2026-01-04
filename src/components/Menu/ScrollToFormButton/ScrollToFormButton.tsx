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
                className="px-4 py-3 border rounded-xl border-[var(--mainColor)] border-2 shadow-lg  w-fit duration-300 hover:bg-[var(--mainColor)] hover:shadow-main-color"
                onClick={setStateMenu ? () => setStateMenu(false) : undefined}
            >
                Reverse form
            </a>
        </>
    );
};
