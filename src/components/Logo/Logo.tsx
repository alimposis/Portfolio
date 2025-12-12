'use client';

import Link from 'next/link';
import { ReactComponent as LogoSVG } from '@/components/icons/logo.svg';

export const Logo = () => {
    return (
        <>
            <Link href="/" replace className="max-w-2xs relative">
                {/* <LogoSVG
                    className="block max-w-full h-auto"
                    viewBox="0 0 WIDTH HEIGHT"
                    preserveAspectRatio="xMidYMid meet"
                /> */}
            </Link>
        </>
    );
};
