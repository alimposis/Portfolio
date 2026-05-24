'use client';

import Link from 'next/link';
import { ReactComponent as LogoSVG } from '../icons/logo.svg';

export const Logo = () => {
    return (
        <>
            <Link href="/" replace className="relative">
                <LogoSVG />
            </Link>
        </>
    );
};
