import { NavSocSeti } from '../NavSocSeti/NavSocSeti';

export const Footer = () => {
    return (
        <>
            <footer className="w-full bg-[var(--secondaryBackgroundColor)] py-[20px] mt-10 md:py-[30px]">
                <main className="container flex items-center justify-center mx-auto">
                    <NavSocSeti />
                </main>
            </footer>
        </>
    );
};
