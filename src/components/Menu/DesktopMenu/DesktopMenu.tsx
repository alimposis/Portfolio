import { routes } from '@/constants/routes';

import { ScrollToFormButton } from '../ScrollToFormButton/ScrollToFormButton';
import Link from 'next/link';

export const DesktopMenu = ({ pathname }: { pathname: string }) => {
    return (
        <>
            <nav className="gap-4 text-base hidden text-white md:flex">
                {routes.map((element, index) => (
                    <Link
                        href={element.href}
                        key={index}
                        className={`transition border-b-[3px] border-transparent h-min my-auto  hover:border-[var(--mainColor)]  ${
                            pathname === element.href ? 'border-[var(--mainColor)]!' : ''
                        }`}
                    >
                        {element.name}
                    </Link>
                ))}
                <ScrollToFormButton />
            </nav>
        </>
    );
};
