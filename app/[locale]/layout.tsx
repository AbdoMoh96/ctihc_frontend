import { NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import type { Metadata } from "next";
import Nav from "@/app/[locale]/Components/Layout/Nav";
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

export default async function RootLayout({
              children,
              params: {locale}
       }: {
    children: React.ReactNode;
    params: {locale: string};
}) {

    const messages = await getMessages();
    return (
        <html lang={locale} dir={locale === 'en' ? 'ltr' : 'rtl'}>
        <body>
        <NextIntlClientProvider messages={messages}>
            <body>
              <Nav/>
               {children}
             <Footer/>
            </body>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}