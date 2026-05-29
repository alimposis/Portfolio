'use client';
import { mainText, secondaryText } from '@/data/animations';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export const MyName = () => {
    const t = useTranslations('heroScreen');
    return (
        <>
            <address>
                <motion.h1
                    initial={mainText.initial}
                    animate={mainText.animate}
                    transition={mainText.transition}
                    className="title-base"
                >
                    {t('title')}
                </motion.h1>
                <motion.h2
                    initial={secondaryText.initial}
                    animate={secondaryText.animate}
                    transition={secondaryText.transition}
                    className="subtitle-base"
                >
                    {t('subTitle')}
                </motion.h2>
            </address>
        </>
    );
};
