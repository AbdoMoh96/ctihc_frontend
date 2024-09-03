import { NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import Footer from "@/app/[locale]/Components/Layout/Footer";
import "./globals.css";


export const metadata: Metadata = {
    title: "ctihc",
    description: "Holding Company for Cotton and Textiles",
};

const locales = ['en', 'ar'];

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}

const DynamicNav = dynamic(() => import('@/app/[locale]/Components/Layout/Nav'), {
    ssr: false,
})

export default async function RootLayout({
              children,
              params: {locale}
       }: {
    children: React.ReactNode;
    params: {locale: 'en' | 'ar'};
}) {

    const messages = await getMessages();
    return (
        <html lang={locale} dir={locale === 'en' ? 'ltr' : 'rtl'}>
        <body>
        <NextIntlClientProvider messages={messages}>
              <DynamicNav/>
               {children}
             <Footer locale={locale}/>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}