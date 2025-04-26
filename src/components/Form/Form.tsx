'use client';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useActionState } from 'react';

import { Input } from '@/components/ui/Input/Input';
import { TextareaForm } from './TextareaForm/TextareaForm';
import { animationOpacity } from '@/data/animations';
import { Button } from '@/components/ui/Button/Button';

import { IActionState } from '@/models';

import FormStyle from './Form.module.scss';

const Form = () => {
    const [state, submitAction] = useActionState<IActionState>(formOnSubmit, {
        data: null,
        error: null,
    });
    async function formOnSubmit(prevState: IActionState, formData: FormData) {
        const tel = formData.get('tel');
        const tg = formData.get('tg');
        const message = formData.get('message');
        const email = formData.get('email');
        const text = `
        Сообщение с портфолио
        tel: ${tel || 'не указанно'}
        tg: ${tg || 'не указанно'}
        email:${email || 'не указанно'}
        message:${message}
        `;
        try {
            axios.post(
                '/Portfolio/api/posts',
                {
                    text,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );
            return {
                data: 'Письмо успешно отправилось',
                error: null,
            };
        } catch {
            return {
                data: null,
                error: 'Возникла ошибка, письмо не отправилось',
            };
        }
    }
    return (
        <>
            <section id="myForm">
                <main className="container">
                    <motion.form
                        className={FormStyle.form}
                        action={submitAction}
                        initial={animationOpacity.initial}
                        whileInView={animationOpacity.animate}
                        transition={animationOpacity.transition}
                        viewport={{ once: true }}
                    >
                        <h2>Contact with me</h2>
                        <section className={FormStyle.section}>
                            <Input name="tel" text="+375 (99) 999-99-99" type="tel" />
                            <Input name="tg" text="Tg: @Alimpoz" type="text" />
                            <Input name="email" text="email" type="email" />
                            <TextareaForm />
                            <Button text="Send" />
                            {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
                            {state.data && <p style={{ color: 'green' }}>{state.data}</p>}
                        </section>
                    </motion.form>
                </main>
            </section>
        </>
    );
};

export default Form;
