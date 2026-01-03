'use client';

import type { IActionState } from '@/models';

import { motion } from 'framer-motion';
import axios from 'axios';
import { useActionState } from 'react';

import { TextareaForm } from './TextareaForm/TextareaForm';
import { animationOpacity } from '@/data/animations';
import { Button } from '@/components/ui/Button/Button';
import { TelInput } from './TelInput/TelInput';
import { TgInput } from './TgInput/TgInput';
import { MailInput } from './MailInput/MailInput';

async function formOnSubmit(prevState: IActionState, formData: FormData): Promise<IActionState> {
    const tel = formData.get('tel');
    const tg = formData.get('tg');
    const email = formData.get('email');
    const message = formData.get('message');

    const text = `
        Сообщение с портфолио
        tel: ${tel || 'не указанно'}
        tg: ${tg || 'не указанно'}
        email: ${email || 'не указанно'}
        message: ${message}
    `;

    try {
        await axios.post('/api/posts', { text });
        return { data: 'Письмо успешно отправилось', error: null };
    } catch {
        return { data: null, error: 'Возникла ошибка, письмо не отправилось' };
    }
}

const Form = () => {
    const [state, submitAction] = useActionState(formOnSubmit, {
        data: null,
        error: null,
    });

    return (
        <section id="myForm">
            <main className="mx-3.5 md:mx-auto md:max-w-2xl">
                <motion.form
                    className="shadow-lg w-full  shadow-main-color gap-y-3 flex flex-col  items-center bg-[var(--secondaryBackgroundColor)] p-[20px] border-2 border-[var(--mainColor)] rounded-md text-[var(--mainText)] mx-auto md:mb-[50px]"
                    action={submitAction}
                    initial={animationOpacity.initial}
                    whileInView={animationOpacity.animate}
                    transition={animationOpacity.transition}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-3xl">Contact with me</h2>
                    <section className="w-full flex flex-col items-center gap-3 md:gap-[20px]">
                        <TelInput />
                        <TgInput />
                        <MailInput />
                        <TextareaForm />
                        <Button text="Send" />
                        {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
                        {state.data && <p style={{ color: 'green' }}>{state.data}</p>}
                    </section>
                </motion.form>
            </main>
        </section>
    );
};

export default Form;
