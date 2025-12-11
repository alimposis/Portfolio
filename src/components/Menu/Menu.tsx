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
            <nav className="flex gap-4 text-2xl text-white">
                {routes.map((element, index) => (
                    <Link
                        href={element.href}
                        key={index}
                        className={`border-b-[3px] border-transparent hover:border-[var(--mainColor)] ${
                            pathname === element.href ? 'border-[var(--mainColor)]!' : ''
                        }`}
                    >
                        {element.name}
                    </Link>
                ))}
                <a href="#myForm">reverse form</a>
            </nav>
        </>
    );
};
