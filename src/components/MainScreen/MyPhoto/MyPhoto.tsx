'use client';
import image from '@/assets/Images/Main.png';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { animationOpacity } from '@/data/animations';

export const MyPhoto = () => {
    return (
        <>
            <motion.figure
                className="w-lg h-120 relative rounded-[50%] overflow-hidden"
                initial={animationOpacity.initial}
                animate={animationOpacity.animate}
                transition={animationOpacity.transition}
            >
                <Image src={image} fill alt="Мое фото" className="w-full h-full" />
            </motion.figure>
        </>
    );
};
