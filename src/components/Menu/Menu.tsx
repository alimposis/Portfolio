'use client';
import { usePathname } from 'next/navigation';

import { routes } from '@/constants/routes';

import Link from 'next/link';

import styles from './Menu.module.scss';

export const Menu = () => {
    const pathname = usePathname();
    console.debug(pathname);
    return (
        <>
            <nav className={styles.nav}>
                {routes.map((element, index) => (
                    <Link
                        href={element.href}
                        key={index}
                        className={pathname === element.href ? styles.active : undefined}
                    >
                        {element.name}
                    </Link>
                ))}
                <a href="#myForm">reverse form</a>
            </nav>
        </>
    );
};
