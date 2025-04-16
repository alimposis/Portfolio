import { MainP } from '../MainP/MainP';
import MainSectionStyle from './MainSection.module.scss';

export const MainSection = () => {
    return (
        <>
            <section className={MainSectionStyle.section}>
                <div className={MainSectionStyle.img__wrapper} />
                <MainP text={'asda'} />
            </section>
        </>
    );
};
