'use client';
import { motion } from 'framer-motion';

import { animationOpacity } from '@/data/animations';

import { ReactComponent as PhoneSVG } from '@/components/icons/phone.svg';
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
                <li>I live in Belarus, Gomel</li>
                <li>
                    <a href="tel:+375291502886">
                        <PhoneSVG className={LocationListStyle.svg} />
                        +375 (29) 150-28-86
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
