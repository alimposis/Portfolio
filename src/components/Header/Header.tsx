import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';

export const Header = () => {
    return (
        <>
            <header className="fixed z-2 py-4 bg-[var(--secondaryBackgroundColor)] flex w-full">
                <main className="mx-auto container flex items-center justify-between">
                    <Logo />
                    <Menu />
                </main>
            </header>
        </>
    );
};
