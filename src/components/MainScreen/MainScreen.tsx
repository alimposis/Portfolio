import { NavSocSeti } from '../NavSocSeti/NavSocSeti';
import { ToTheBottom } from './ToTheBottom/ToTheBottom';

import MainScreenStyle from './MainScreen.module.scss';
import { MyName } from './MyName/MyName';
import { MyPhoto } from './MyPhoto/MyPhoto';

export const MainScreen = () => {
    return (
        <>
            <section className={MainScreenStyle.section}>
                <main className="container">
                    <MyPhoto />
                    <MyName />
                </main>
                <NavSocSeti />
                <ToTheBottom href="#TwoSection" />
            </section>
        </>
    );
};
