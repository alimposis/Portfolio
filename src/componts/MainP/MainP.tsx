import SpanSvg from '../../assets/svgs/span.svg?react';

import { IPropsP } from '../../models';

export const MainP = ({ text }: IPropsP) => {
    return (
        <>
            <span>
                <SpanSvg />
                fgs
                <p>{text}</p>
            </span>
        </>
    );
};
