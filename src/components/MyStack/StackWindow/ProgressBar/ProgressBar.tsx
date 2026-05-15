import ProgressBarStyle from './ProgressBar.module.scss';

import { motion } from 'framer-motion';

import { progressBar } from '@/data/animations';

export const ProgressBar = ({ progress }: { progress: string }) => {
    return (
        <>
            <motion.p
                initial={progressBar.initial}
                animate={progressBar.animate}
                transition={progressBar.transition}
            >
                Progress:
            </motion.p>
            <motion.div
                initial={progressBar.initial}
                animate={progressBar.animate}
                transition={progressBar.transition}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                className="h-[10px] bg-[var(--mainBackgroundColor)] color-white width-[80%] border border-[var(--secondaryColor)] rounded-2xl md:h-[15px]"
            >
                <span
                    className="flex h-full bg-[var(--mainColor)] rounded-2xl"
                    style={{ width: progress }}
                ></span>
            </motion.div>
        </>
    );
};
