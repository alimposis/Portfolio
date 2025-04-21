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
                <a href="/telegram">
                    <TelegramSVG />
                </a>
                <a href="/telegram">
                    <HHSVG />
                </a>
                <a href="/telegram">
                    <GitHubSVG />
                </a>
                <a href="/telegram">
                    <LinkedinSVG />
                </a>
            </nav>
        </>
    );
};
