'use client';
import { mainText, secondaryText } from '@/data/animations';
import { motion } from 'framer-motion';

export const MyName = () => {
    return (
        <>
            <address>
                <motion.h1
                    initial={mainText.initial}
                    animate={mainText.animate}
                    transition={mainText.transition}
                >
                    Vodyanikov Yaroslav
                </motion.h1>
                <motion.p
                    initial={secondaryText.initial}
                    animate={secondaryText.animate}
                    transition={secondaryText.transition}
                >
                    Front-end development
                </motion.p>
            </address>
        </>
    );
};
