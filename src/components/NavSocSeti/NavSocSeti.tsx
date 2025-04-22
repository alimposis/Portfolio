'use client';

import { ReactComponent as TelegramSVG } from '@/components/icons/telegram.svg';
import { ReactComponent as HHSVG } from '@/components/icons/hh.svg';
import { ReactComponent as GitHubSVG } from '@/components/icons/github.svg';
import { ReactComponent as LinkedinSVG } from '@/components/icons/linkedin.svg';

import NavSocSetiStyle from './NavSocSeti.module.scss';

export const NavSocSeti = () => {
    return (
        <>
            <nav className={NavSocSetiStyle.nav}>
                <a href="https://t.me/Alimpoz">
                    <TelegramSVG />
                </a>
                <a href="https://rabota.by/resume/f0d3fcfcff0df1cfe40039ed1f514870617056">
                    <HHSVG />
                </a>
                <a href="https://github.com/alimposis">
                    <GitHubSVG />
                </a>
                <a href="https://www.linkedin.com/in/водяников-ярослав-7531212ba">
                    <LinkedinSVG />
                </a>
            </nav>
        </>
    );
};
