import type { Metadata } from 'next';
import type { Viewport } from 'next';

import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    const messages = await getMessages();
    return (
        <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer />
        </NextIntlClientProvider>
    );
}
