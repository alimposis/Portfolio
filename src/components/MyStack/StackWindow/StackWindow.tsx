'use client';
import type { IListStack } from '@/models';

import { motion } from 'framer-motion';

import { ProgressBar } from './ProgressBar/ProgressBar';

import { stackWindowTitle } from '@/data/animations';
import { stackWindowText } from '@/data/animations';

export const StackWindow = ({ name, description, progress, time }: IListStack) => {
    return (
        <>
            <motion.article
                key="modal"
                layout
                exit={{ opacity: 0 }}
                className="mx-3 shadow-base flex flex-col text-[var(--secondaryColor)] gap-2 p-2 rounded-2xl border-2 border-[var(--mainColor)] max-w-[500px] bg-[var(--secondaryBackgroundColor)] w-full"
            >
                <motion.h3
                    initial={stackWindowTitle.initial}
                    animate={stackWindowTitle.animate}
                    transition={stackWindowTitle.transition}
                >
                    {name}
                </motion.h3>
                <ProgressBar progress={progress} />
                <motion.p
                    initial={stackWindowText.initial}
                    animate={stackWindowText.animate}
                    transition={stackWindowText.transition}
                >
                    Work experience: {time}
                </motion.p>
                <motion.p
                    initial={stackWindowText.initial}
                    animate={stackWindowText.animate}
                    transition={stackWindowText.transition}
                >
                    {description}
                </motion.p>
            </motion.article>
        </>
    );
};
