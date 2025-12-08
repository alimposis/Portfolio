import style from './AboutMe.module.scss';

export const AboutMe = () => {
    return (
        <>
            <section className={style.section}>
                <h2 className={`title ${style.h2} `}>About me</h2>
                <main className={`container ${style.main}`}>
                    <p>
                        I am a 23-year-old Frontend Developer committed to continuous growth and
                        mastering my craft. I am highly motivated to develop my technical and
                        professional skills, and I am open to relocation for the right opportunity
                        that helps me advance in my field.
                    </p>
                    <p>
                        Beyond my work, I have a strong appreciation for activities that expand both
                        creativity and discipline. I play the piano, enjoy cycling, and regularly
                        train outdoors. I also appreciate strategic and immersive experiences such
                        as chess and computer games, including Valorant, World of Warcraft, and
                        various single-player titles.
                    </p>
                    <p>
                        These interests help me stay balanced, focused, and inspired — qualities I
                        bring into my work as a developer. I am determined to grow into a highly
                        skilled specialist and contribute meaningfully to the teams and products I
                        work with.
                    </p>
                </main>
            </section>
        </>
    );
};
