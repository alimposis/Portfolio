import MyStackStyle from './MyStack.module.scss';
import { MyStackWrapper } from './MyStackWrapper/MyStackWrapper';

export const MyStack = async () => {
    return (
        <>
            <section className="container">
                <main className={MyStackStyle.main}>
                    <h2 className="title">My stack</h2>
                    <MyStackWrapper />
                </main>
            </section>
        </>
    );
};
