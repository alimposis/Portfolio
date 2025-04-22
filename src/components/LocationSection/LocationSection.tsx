import { LocationList } from './LocationList/LocationList';

import LocationSectionStyle from './LocationSection.module.scss';

export const LocationSection = () => {
    return (
        <>
            <section className={LocationSectionStyle.section} id="TwoSection">
                <main className="container">
                    <div
                        className={LocationSectionStyle.map}
                        style={{ position: 'relative', overflow: 'hidden' }}
                    >
                        <a
                            href="https://yandex.by/maps/155/gomel/?utm_medium=mapframe&utm_source=maps"
                            style={{
                                color: '#eee',
                                fontSize: '12px',
                                position: 'absolute',
                                top: '0px',
                            }}
                        >
                            Гомель
                        </a>
                        <a
                            href="https://yandex.by/maps/155/gomel/?ll=31.014272%2C52.424160&utm_medium=mapframe&utm_source=maps&z=10"
                            style={{
                                color: '#eee',
                                fontSize: '12px',
                                position: 'absolute',
                                top: '14px',
                            }}
                        >
                            Карта Гомеля с улицами и номерами домов — Яндекс Карты
                        </a>
                        <iframe
                            src="https://yandex.by/map-widget/v1/?ll=31.014272%2C52.424160&z=10"
                            width="560"
                            height="400"
                            frameBorder="1"
                            allowFullScreen={true}
                            style={{ position: 'relative' }}
                        ></iframe>
                    </div>
                    <LocationList />
                </main>
            </section>
        </>
    );
};
