import Image from 'next/image';
import MainScreenStyle from './MainScreen.module.scss';

export const MainScreen = () => {
    return (
        <>
            <section className={MainScreenStyle.section}>
                <Image className={MainScreenStyle.image} src="/images/Bg.webp" alt="" fill />
            </section>
        </>
    );
};
