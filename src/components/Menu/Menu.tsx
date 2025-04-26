import Link from 'next/link';

import MenuStyle from './Menu.module.scss';

export const Menu = () => {
    return (
        <>
            <nav className={MenuStyle.nav}>
                <Link href="/workExperience#MyStack">My stack</Link>
                <Link href="/workExperience">Work experience</Link>
                <a href="#myForm">Reverse form</a>
            </nav>
        </>
    );
};
