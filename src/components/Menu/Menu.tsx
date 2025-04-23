import Link from 'next/link';

import MenuStyle from './Menu.module.scss';

export const Menu = () => {
    return (
        <>
            <nav className={MenuStyle.nav}>
                <Link href="/workExperience">Опыт работы</Link>
                <Link href="/myProjects">Мои проекты</Link>
                <a href="#myForm">Обратная форма</a>
            </nav>
        </>
    );
};
