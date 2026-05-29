'use client';

import { motion } from 'framer-motion';
import { useActionState } from 'react';
import { useTranslations } from 'next-intl';

import { formOnSubmit } from '@/services/api';

import { TextareaForm } from './TextareaForm/TextareaForm';
import { animationOpacity } from '@/data/animations';
import { Button } from '@/components/ui/Button/Button';
import { TelInput } from './TelInput/TelInput';
import { TgInput } from './TgInput/TgInput';
import { MailInput } from './MailInput/MailInput';

const Form = () => {
    const t = useTranslations('form');
    const [state, submitAction] = useActionState(formOnSubmit, {
        data: null,
        error: null,
    });

    return (
        <section id="myForm" className="my-5">
            <main className="mx-3.5 md:mx-auto md:max-w-2xl">
                <motion.form
                    className="shadow-base w-full   gap-y-3 flex flex-col  items-center bg-[var(--secondaryBackgroundColor)] p-[20px] border-2 border-[var(--mainColor)] rounded-md text-[var(--mainText)] mx-auto md:mb-[50px] "
                    action={submitAction}
                    initial={animationOpacity.initial}
                    whileInView={animationOpacity.animate}
                    transition={animationOpacity.transition}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-3xl">{t('title')}</h2>
                    <section className="w-full flex flex-col items-center gap-3 md:gap-[20px]">
                        <TelInput />
                        <TgInput />
                        <MailInput />
                        <TextareaForm placeholder={t('textArea')} />
                        <Button text={t('button')} />
                        {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
                        {state.data && <p style={{ color: 'green' }}>{state.data}</p>}
                    </section>
                </motion.form>
            </main>
        </section>
    );
};

export default Form;
