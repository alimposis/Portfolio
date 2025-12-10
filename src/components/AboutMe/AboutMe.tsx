import style from './AboutMe.module.scss';

export const AboutMe = () => {
    return (
        <>
            <section className={style.section} id="TwoSection">
                <h2 className={`title ${style.h2}`}>About me</h2>
                <main className={`container ${style.main}`}>
                    <div className={style.div}>
                        <p>
                            Web Developer at “TARGET-GROUP,” 2024 <br />
                            Stack: JS, WordPress, React, jQuery, HTML, CSS, Figma
                        </p>
                        <span className={style.span} />
                        <p>
                            I am a 23-year-old Frontend Developer committed to continuous growth and
                            mastering my craft. I am highly motivated to develop my technical and
                            professional skills, and I am open to relocation for the right
                            opportunity that helps me advance in my field.
                        </p>
                    </div>
                    <p>
                        I completed courses at “IT Step Academy,” gaining practical skills in JS,
                        TS, React, HTML, and CSS to build modern web applications.
                    </p>
                </main>
            </section>
        </>
    );
};
