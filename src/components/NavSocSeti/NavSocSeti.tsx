'use client';

import { motion } from 'framer-motion';

import { ReactComponent as TelegramSVG } from '@/components/icons/telegram.svg';
import { ReactComponent as HHSVG } from '@/components/icons/hh.svg';
import { ReactComponent as GitHubSVG } from '@/components/icons/github.svg';
import { ReactComponent as LinkedinSVG } from '@/components/icons/linkedin.svg';

import NavSocSetiStyle from './NavSocSeti.module.scss';
import { icons } from '@/data/animations';

export const NavSocSeti = () => {
    return (
        <>
            <nav className={NavSocSetiStyle.nav}>
                <motion.a whileHover={icons} href="https://t.me/Alimpoz">
                    <TelegramSVG />
                </motion.a>
                <motion.a
                    whileHover={icons}
                    href="https://rabota.by/resume/f0d3fcfcff0df1cfe40039ed1f514870617056"
                >
                    <HHSVG />
                </motion.a>
                <motion.a whileHover={icons} href="https://github.com/alimposis">
                    <GitHubSVG />
                </motion.a>
                <motion.a
                    whileHover={icons}
                    href="https://www.linkedin.com/in/водяников-ярослав-7531212ba"
                >
                    <LinkedinSVG />
                </motion.a>
            </nav>
        </>
    );
};
