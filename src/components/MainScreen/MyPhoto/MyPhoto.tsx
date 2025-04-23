'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { animationOpacity } from '@/data/animations';

import MainScreenStyle from './../MainScreen.module.scss';

export const MyPhoto = () => {
    return (
        <>
            <motion.figure
                className={MainScreenStyle.figure}
                initial={animationOpacity.initial}
                animate={animationOpacity.animate}
                transition={animationOpacity.transition}
            >
                <Image src="/images/Main.png" fill alt="Мое фото" />
            </motion.figure>
        </>
    );
};
