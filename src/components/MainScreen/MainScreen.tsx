import { NavSocSeti } from '../NavSocSeti/NavSocSeti';
import { ToTheBottom } from './ToTheBottom/ToTheBottom';

import MainScreenStyle from './MainScreen.module.scss';
import { MyName } from './MyName/MyName';
import { MyPhoto } from './MyPhoto/MyPhoto';

export const MainScreen = () => {
    return (
        <>
            <section className="w-full h-[100vh] relative flex flex-col justify-between pt-35 pb-12.5 bg-[var(--mainBackgroundColor)]">
                <main className="container flex justify-between items-center gap-12.5 mx-auto text-[var(--secondaryColor)]">
                    <MyPhoto />
                    <MyName />
                </main>
                <NavSocSeti />
                <ToTheBottom href="#TwoSection" />
            </section>
        </>
    );
};
