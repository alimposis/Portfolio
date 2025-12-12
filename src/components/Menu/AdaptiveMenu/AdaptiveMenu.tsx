import { routes } from '@/constants/routes';

import { ReactComponent as MenuSVG } from '@/components/icons/menu.svg';
import { ReactComponent as CloseSVG } from '@/components/icons/close.svg';
import Link from 'next/link';
import { ScrollToFormButton } from '../ScrollToFormButton/ScrollToFormButton';

import { useState } from 'react';

export const AdaptiveMenu = ({ pathname }: { pathname: string }) => {
    const [stateMenu, setStateMenu] = useState(false);
    return (
        <>
            <div className="gap-4 text-xl flex text-white md:hidden">
                <button className="p-4" onClick={() => setStateMenu(pref => !pref)}>
                    <MenuSVG className="fill-[var(--mainColor)] text-[var(--mainColor)] stroke-[var(--mainColor)]" />
                </button>
                {stateMenu && (
                    <nav className="w-full h-full fixed left-0 bg-[var(--secondaryBackgroundColor)] z-7 flex flex-col p-2 gap-4">
                        <button className="p-4 ml-auto" onClick={() => setStateMenu(pref => !pref)}>
                            <CloseSVG className="fill-[var(--mainColor)] text-[var(--mainColor)] stroke-[var(--mainColor)]" />
                        </button>
                        {routes.map((element, index) => (
                            <Link
                                href={element.href}
                                key={index}
                                className={`w-fit transition border-b-[3px] border-transparent h-min  hover:border-[var(--mainColor)]  ${
                                    pathname === element.href ? 'border-[var(--mainColor)]!' : ''
                                }`}
                                onClick={() => setStateMenu(false)}
                            >
                                {element.name}
                            </Link>
                        ))}
                        <ScrollToFormButton setStateMenu={setStateMenu} />
                    </nav>
                )}
            </div>
        </>
    );
};
