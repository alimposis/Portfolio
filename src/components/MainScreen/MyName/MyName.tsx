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
                    className="text-5xl"
                >
                    Vodyanikov Yaroslav
                </motion.h1>
                <motion.p
                    initial={secondaryText.initial}
                    animate={secondaryText.animate}
                    transition={secondaryText.transition}
                    className="text-3xl"
                >
                    Front-end development
                </motion.p>
            </address>
        </>
    );
};
