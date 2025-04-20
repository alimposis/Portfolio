import { Menu } from '../Menu/Menu';
import Title from '../ui/Title/Title';
import HeaderStyle from './Header.module.scss';

export const Header = () => {
    return (
        <>
            <header className={HeaderStyle.header}>
                <main>
                    <Title text={'Portfolio'} />
                    <Menu />
                </main>
            </header>
        </>
    );
};
