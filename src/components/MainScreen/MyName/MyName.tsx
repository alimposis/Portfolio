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
                    className="title-base"
                >
                    Vodyanikov Yaroslav
                </motion.h1>
                <motion.h2
                    initial={secondaryText.initial}
                    animate={secondaryText.animate}
                    transition={secondaryText.transition}
                    className="subtitle-base"
                >
                    Front-end development
                </motion.h2>
            </address>
        </>
    );
};
