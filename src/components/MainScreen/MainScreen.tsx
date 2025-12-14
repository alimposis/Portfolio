import { NavSocSeti } from '../NavSocSeti/NavSocSeti';
import { ToTheBottom } from './ToTheBottom/ToTheBottom';
import { MyName } from './MyName/MyName';
import { MyPhoto } from './MyPhoto/MyPhoto';

export const MainScreen = () => {
    return (
        <>
            <section className="w-full h-[100vh] relative flex flex-col justify-around pt-[114px] md:pt-35 md:pb-12.5 md:justify-between bg-[var(--mainBackgroundColor)]">
                <main className="container flex justify-between flex-col items-center gap-12.5 mx-auto text-[var(--secondaryColor)] md:flex-row">
                    <MyPhoto />
                    <MyName />
                </main>
                <NavSocSeti />
                <ToTheBottom href="#TwoSection" />
            </section>
        </>
    );
};
