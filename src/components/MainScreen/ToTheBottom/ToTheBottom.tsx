'use client';
import { ReactComponent as ArrowBottomSVG } from '@/components/icons/arrowbottom.svg';

import ToTheBottomStyle from './ToTheBottom.module.scss';
export const ToTheBottom = ({ href }: { href: string }) => {
    return (
        <>
            <a href={href} className={ToTheBottomStyle.a}>
                <ArrowBottomSVG className={ToTheBottomStyle.svg} />
            </a>
        </>
    );
};
