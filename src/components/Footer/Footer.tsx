import { Menu } from '../Menu/Menu';
import { NavSocSeti } from '../NavSocSeti/NavSocSeti';

import FooterStyle from './Footer.module.scss';

export const Footer = () => {
    return (
        <>
            <footer className={FooterStyle.footer}>
                <main className="container">
                    <Menu />
                    <NavSocSeti />
                </main>
            </footer>
        </>
    );
};
