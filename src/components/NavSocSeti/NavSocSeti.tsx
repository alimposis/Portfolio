'use client';

import { motion } from 'framer-motion';

import { icons } from '@/data/animations';
import { links } from '@/constants/links';

export const NavSocSeti = () => {
    return (
        <>
            <nav className="mx-auto relative flex items-center justify-center flex-wrap  gap-x-[25vw] gap-y-5 md:gap-12.5 ">
                {links.map((e, index) => (
                    <motion.a
                        whileHover={icons}
                        href={e.href}
                        target="_blank"
                        rel="noopener"
                        key={index}
                        className="relative size-[10vw] *:w-full *:h-full md:w-12.5 md:h-12.5"
                    >
                        {e.Icon}
                    </motion.a>
                ))}
            </nav>
        </>
    );
};
