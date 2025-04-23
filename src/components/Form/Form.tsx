'use client';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/Input/Input';
import { TextareaForm } from './TextareaForm/TextareaForm';

import FormStyle from './Form.module.scss';
import { animationOpacity } from '@/data/animations';
import { Button } from '@/components/ui/Button/Button';

export const Form = () => {
    return (
        <>
            <section id="myForm">
                <main className="container">
                    <motion.form
                        className={FormStyle.form}
                        action=""
                        initial={animationOpacity.initial}
                        whileInView={animationOpacity.animate}
                        transition={animationOpacity.transition}
                        viewport={{ once: true }}
                    >
                        <h2>Связь со мной</h2>
                        <section className={FormStyle.section}>
                            <Input text="Номер телефона" type="tel" />
                            <Input text="TG" type="text" />
                            <TextareaForm />
                            <Button text="Отправить" />
                        </section>
                    </motion.form>
                </main>
            </section>
        </>
    );
};
