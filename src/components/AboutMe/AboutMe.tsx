'useClient';

import { useTranslations } from 'next-intl';

export const AboutMe = () => {
    const t = useTranslations('aboutMe');
    return (
        <>
            <section
                className="flex flex-col my-[50px]  gap-[20px] scroll-mt-[80px] md:my-[150px]"
                id="TwoSection"
            >
                <h2 className="mx-auto text-[var(--secondaryColor)] text-2xl md:text-3xl">
                    {t('mainTitle')}
                </h2>
                <main className="mx-3.5 flex flex-col text-[var(--secondaryColor)] gap-[14px] items-center md:container md:mx-auto ">
                    <div className="max-w-[45%] ml-auto mr-auto flex flex-col gap-[14px] md:flex-row md:w-fit">
                        <div className="flex w-fit flex-col mx-auto md:m-0">
                            <h3 className="text-xl text-center mb-3 md:text-right">
                                {t('workExperienceTitle')}
                            </h3>
                            <p className=" items-center w-full h-min my-auto ml-auto md:text-right">
                                {t('workExperienceDesc')}
                            </p>
                        </div>
                        <span className="w-1 hidden bg-white md:block" />
                        <div className="max-w-[45%] flex w-fit flex-col mx-auto md:m-0">
                            <h3 className="text-xl mb-3 text-center md:text-left">
                                {t('educationTitle')}
                            </h3>
                            <p className="items-center h-min my-auto w-full md:text-left">
                                {t('educationDesc')}
                            </p>
                        </div>
                    </div>
                    <p className="text-center">{t('yearAndAdditionalDesc')}</p>
                    <p className="text-center">{t('moodDesc')}</p>
                </main>
            </section>
        </>
    );
};
