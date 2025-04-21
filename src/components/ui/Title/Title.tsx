'use client';
import { memo } from 'react';

import { ReactComponent } from '@/components/icons/Title.svg';

import TitleStyle from './Title.module.scss';
import Link from 'next/link';

const Title = ({ text }: { text: string }) => {
    return (
        <>
            <span className={TitleStyle.span}>
                <Link href="/" replace>
                    <ReactComponent className={TitleStyle.svg} />
                    <p>{text}</p>
                </Link>
            </span>
        </>
    );
};

export default memo(Title);
