import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Cabin } from 'next/font/google';
import { Metadata, Viewport } from 'next';
import { getMessages } from 'next-intl/server';
import './global.css';

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
};

const cabinSans = Cabin({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'VODZIANOKOV YAROSLAV PORTFOLIO',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${cabinSans.className} antialiased bg-[var(--mainBackgroundColor)]`}>
                {children}
            </body>
        </html>
    );
}
