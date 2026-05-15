import { useState } from 'react';

import { routes } from '@/constants/routes';
import { adaptiveMenu } from '@/data/animations';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

import { ReactComponent as MenuSVG } from '@/components/icons/menu.svg';
import { ReactComponent as CloseSVG } from '@/components/icons/close.svg';
import { ScrollToFormButton } from '../ScrollToFormButton/ScrollToFormButton';

export const AdaptiveMenu = ({ pathname }: { pathname: string }) => {
    const [stateMenu, setStateMenu] = useState(false);
    return (
        <>
            <div className="gap-4 text-xl flex text-white md:hidden">
                <button className="p-4" onClick={() => setStateMenu(pref => !pref)}>
                    <MenuSVG className="fill-[var(--mainColor)] text-[var(--mainColor)] stroke-[var(--mainColor)]" />
                </button>
                <AnimatePresence>
                    {stateMenu && (
                        <motion.div
                            key="modal"
                            className="w-full h-full fixed left-0 bg-[var(--secondaryBackgroundColor)] z-7 flex flex-col p-2 gap-4"
                            initial={adaptiveMenu.initial}
                            animate={adaptiveMenu.animate}
                            exit={adaptiveMenu.exit}
                        >
                            <button
                                className="p-4 ml-auto"
                                onClick={() => setStateMenu(pref => !pref)}
                            >
                                <CloseSVG className="fill-[var(--mainColor)] text-[var(--mainColor)] stroke-[var(--mainColor)]" />
                            </button>
                            {routes.map((element, index) => (
                                <Link
                                    href={element.href}
                                    key={index}
                                    className={`w-fit transition border-b-[3px] border-transparent h-min  hover:border-[var(--mainColor)] ${
                                        pathname === element.href
                                            ? 'border-[var(--mainColor)]!'
                                            : ''
                                    }`}
                                    onClick={() => setStateMenu(false)}
                                >
                                    {element.name}
                                </Link>
                            ))}
                            <ScrollToFormButton setStateMenu={setStateMenu} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};
