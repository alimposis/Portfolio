'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { mainImg } from '@/data/animations';

import MainScreenStyle from './../MainScreen.module.scss';

export const MyPhoto = () => {
    return (
        <>
            <motion.figure
                className={MainScreenStyle.figure}
                initial={mainImg.initial}
                animate={mainImg.animate}
                transition={mainImg.transition}
            >
                <Image src="/images/Main.png" fill alt="Мое фото" />
            </motion.figure>
        </>
    );
};
