'use client';
import { usePathname } from 'next/navigation';

import { DesktopMenu } from './DesktopMenu/DesktopMenu';
import { AdaptiveMenu } from './AdaptiveMenu/AdaptiveMenu';

export const Menu = () => {
    const pathname = usePathname();
    return (
        <>
            <DesktopMenu pathname={pathname} />
            <AdaptiveMenu pathname={pathname} />
        </>
    );
};
