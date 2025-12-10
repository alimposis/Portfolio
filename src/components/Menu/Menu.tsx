import { routes } from '@/constants/routes';

import Link from 'next/link';

import { useRouter } from 'next/router';

import MenuStyle from './Menu.module.scss';

export const Menu = () => {
    const router = useRouter();

    return (
        <>
            <nav className={MenuStyle.nav}>
                {routes.map((element, index) => (
                    <Link href={element.href} key={index}>
                        {element.name}
                    </Link>
                ))}
                <a href="#myForm">Reverse form</a>
            </nav>
        </>
    );
};
