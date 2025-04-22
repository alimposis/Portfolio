import Image from 'next/image';

import { NavSocSeti } from '../NavSocSeti/NavSocSeti';
import { ToTheBottom } from './ToTheBottom/ToTheBottom';

import MainScreenStyle from './MainScreen.module.scss';

export const MainScreen = () => {
    return (
        <>
            <section className={MainScreenStyle.section}>
                <main className="container">
                    <figure className={MainScreenStyle.figure}>
                        <Image src="/images/Main.png" fill alt="Мое фото" />
                    </figure>
                    <address>
                        <h1>Водяников Ярослав</h1>
                        <p>Front-end разработчик</p>
                    </address>
                </main>
                <NavSocSeti />
                <ToTheBottom href="#TwoSection" />
            </section>
        </>
    );
};
