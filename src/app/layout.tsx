import type { Metadata } from 'next';
import { Cabin } from 'next/font/google';
import '@/scss/index.scss';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

const cabinSans = Cabin({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'VODZIANOKOV YAROSLAV PORTFOLIO',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${cabinSans.className} antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
