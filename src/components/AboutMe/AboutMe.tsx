export const AboutMe = () => {
    return (
        <>
            <section
                className="flex flex-col my-[50px]  gap-[20px] scroll-mt-[80px] md:my-[150px]"
                id="TwoSection"
            >
                <h2 className="mx-auto text-[var(--secondaryColor)] text-2xl md:text-3xl">
                    About me
                </h2>
                <main className="mx-3.5 flex flex-col text-[var(--secondaryColor)] gap-[14px] items-center md:container md:mx-auto">
                    <div className="flex flex-col gap-[14px] md:flex-row">
                        <div className="flex w-min flex-col">
                            <h3 className="text-xl text-center mb-3 md:text-right">
                                Work experience
                            </h3>
                            <p className="items-center h-min my-auto w-max md:text-right  ">
                                Web Developer at “TARGET-GROUP,” 2024 <br />
                                Stack: JS, WordPress, React, jQuery, HTML, CSS, Figma
                            </p>
                        </div>
                        <span className="w-1 hidden bg-white md:block" />
                        <div className="flex w-fit flex-col">
                            <h3 className="text-xl mb-3 text-center md:text-left">Education</h3>
                            <p className="items-center h-min my-auto w-fit md:text-left">
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
                        <br className="hidden md:block" /> I am highly motivated to develop my
                        technical and professional skills, and I am open to relocation for the right
                        opportunity that helps me advance in my field.
                    </p>
                </main>
            </section>
        </>
    );
};
