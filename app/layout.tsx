import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import Footer from "@/app/Components/Layout/Footer";
import "./globals.css";


export const metadata: Metadata = {
    title: "ctihc",
    description: "Holding Company for Cotton and Textiles",
};

const locales = ['en', 'ar'];

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
}

const DynamicNav = dynamic(() => import('@/app/Components/Layout/Nav'), {
    ssr: false,
})

export default async function RootLayout({
              children,
              params: {locale}
       }: {
    children: React.ReactNode;
    params: {locale: 'en' | 'ar'};
}) {

    return (
        <html lang={locale} dir={'en' === 'en' ? 'ltr' : 'rtl'}>
        <body>

              <DynamicNav/>
               {children}
             <Footer/>

        </body>
        </html>
    );
}