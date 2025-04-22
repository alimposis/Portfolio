'use client';
import { ReactComponent as EmailSVG } from '@/components/icons/email.svg';
import { ReactComponent as SmsSVG } from '@/components/icons/sms.svg';

import LocationListStyle from './LocationList.module.scss';

export const LocationList = () => {
    return (
        <>
            <ul className={LocationListStyle.ul}>
                <li>Нахожусь: Беларусь, Гомель</li>
                <li>
                    <a href="">
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
            </ul>
        </>
    );
};
