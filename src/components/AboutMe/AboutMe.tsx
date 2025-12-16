import style from './AboutMe.module.scss';

export const AboutMe = () => {
    return (
        <>
            <section
                className="flex flex-col my-[150px] gap-[20px] scroll-mt-[80px]"
                id="TwoSection"
            >
                <h2 className="mx-auto text-[var(--secondaryColor)] text-2xl md:text-3xl">
                    About me
                </h2>
                <main className="container mx-auto flex flex-col text-[var(--secondaryColor)] gap-[14px] items-center">
                    <div className="flex gap-[14px]">
                        <div className="flex w-min flex-col">
                            <h3 className="text-xl text-right mb-3">Work experience</h3>
                            <p className="w-[50%] items-center h-min my-auto text-right w-max">
                                Web Developer at “TARGET-GROUP,” 2024 <br />
                                Stack: JS, WordPress, React, jQuery, HTML, CSS, Figma
                            </p>
                        </div>
                        <span className="w-1 bg-white" />
                        <div className="flex w-fit flex-col">
                            <h3 className="text-xl text-left mb-3">Education</h3>
                            <p className="w-[50%] items-center h-min my-auto text-left w-fit">
                                I completed courses at “IT Step Academy”,
                                <br /> gaining practical skills in JS, TS, React, HTML, and CSS to
                                <br />
                                build modern web applications.
                            </p>
                        </div>
                    </div>
                    <p className="text-center">
                        I am a 23-year-old Frontend Developer committed to continuous growth and
                        mastering my craft.
                        <br /> I am highly motivated to develop my technical and professional
                        skills, and I am open to relocation for the right opportunity that helps me
                        advance in my field.
                    </p>
                </main>
            </section>
        </>
    );
};
