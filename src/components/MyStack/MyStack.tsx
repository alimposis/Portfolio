import MyStackStyle from './MyStack.module.scss';
import { MyStackWrapper } from './MyStackWrapper/MyStackWrapper';

export const MyStack = async () => {
    return (
        <>
            <section className="container m-auto">
                <main className="flex flex-col  relative pt-[112px]">
                    <h1 className="title-base text-center my-5">My stack</h1>
                    <MyStackWrapper />
                </main>
            </section>
        </>
    );
};
