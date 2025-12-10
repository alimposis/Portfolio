import { LocationList } from './LocationList/LocationList';

import styles from './LocationSection.module.scss';

const LocationSection = () => {
    return (
        <>
            <section className={styles.section}>
                <main className={`container ${styles.main}`}>
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
                        className={styles.map}
                        style={{ position: 'relative' }}
                    ></iframe>
                    <LocationList />
                </main>
            </section>
        </>
    );
};

export default LocationSection;
