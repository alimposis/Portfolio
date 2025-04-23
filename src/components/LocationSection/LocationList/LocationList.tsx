'use client';

import { ReactComponent as EmailSVG } from '@/components/icons/email.svg';
import { ReactComponent as SmsSVG } from '@/components/icons/sms.svg';
import { animate, motion } from 'framer-motion';

import LocationListStyle from './LocationList.module.scss';
import { animationOpacity } from '@/data/animations';

export const LocationList = () => {
    return (
        <>
            <motion.ul
                className={LocationListStyle.ul}
                initial={animationOpacity.initial}
                transition={animationOpacity.transition}
                whileInView={animationOpacity.animate}
            >
                <li>Нахожусь: Беларусь, Гомель</li>
                <li>
                    <a href="mailto:alimpostea@mail.com">
                        <EmailSVG className={LocationListStyle.svg} />
                        alimpostea@mail.ru
                    </a>
                </li>
                <li>
                    <a href="">
                        <SmsSVG className={LocationListStyle.svg} />
                        Обратная форма
                    </a>
                </li>
            </motion.ul>
        </>
    );
};
