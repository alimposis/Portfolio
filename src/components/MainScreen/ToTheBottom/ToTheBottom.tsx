'use client';
import { ReactComponent as ArrowBottomSVG } from '@/components/icons/arrowbottom.svg';

export const ToTheBottom = ({ href }: { href: string }) => {
    return (
        <>
            <a
                href={href}
                className="hidden w-[50px] bottom-[30%] absolute top-[100vh] ml-auto mr-auto left-[50%] right-auto md:block "
            >
                <ArrowBottomSVG className="color-[var(--mainColor)] fill-[var(--mainColor)] animate-spin w-[50px] h-[100px]" />
            </a>
        </>
    );
};
