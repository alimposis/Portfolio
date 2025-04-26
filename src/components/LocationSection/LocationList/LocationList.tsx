'use client';
import { motion } from 'framer-motion';

import { animationOpacity } from '@/data/animations';

import { ReactComponent as EmailSVG } from '@/components/icons/email.svg';
import { ReactComponent as SmsSVG } from '@/components/icons/sms.svg';

import LocationListStyle from './LocationList.module.scss';

export const LocationList = () => {
    return (
        <>
            <motion.ul
                className={LocationListStyle.ul}
                initial={animationOpacity.initial}
                transition={animationOpacity.transition}
                whileInView={animationOpacity.animate}
                viewport={{ once: true }}
            >
                <li>I am in: Belarus, Gomel</li>
                <li>
                    <a href="mailto:alimpostea@mail.com">
                        <EmailSVG className={LocationListStyle.svg} />
                        alimpostea@mail.ru
                    </a>
                </li>
                <li>
                    <a href="#myForm">
                        <SmsSVG className={LocationListStyle.svg} />
                        Reverse form
                    </a>
                </li>
            </motion.ul>
        </>
    );
};
