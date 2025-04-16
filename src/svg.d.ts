// src/types/svg.d.ts

declare module '*.svg?react' {
    import { FunctionComponent, SVGProps } from 'react';
    const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
    export { ReactComponent };
}
