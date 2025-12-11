import { Menu } from '../Menu/Menu';
import Title from '../Title/Title';

// import HeaderStyle from './Header.module.scss';

export const Header = () => {
    return (
        <>
            <header className="fixed z-2 py-4 bg-[var(--secondaryBackgroundColor)] flex w-full">
                <main className="mx-auto container flex items-center justify-between">
                    <Title text={'Portfolio'} />
                    <Menu />
                </main>
            </header>
        </>
    );
};
