import Image from 'next/image';
import MainScreenStyle from './MainScreen.module.scss';
import { NavSocSeti } from '../NavSocSeti/NavSocSeti';
import { ToTheBottom } from './ToTheBottom/ToTheBottom';

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
