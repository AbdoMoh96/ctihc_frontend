import React from 'react';
import Container from "@/app/[locale]/Components/Layout/Container";
import AnimatedSection from "@/Components/Animation/AnimatedSection";
import {useTranslations} from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';
import Data from "@/Data/data";

interface ContactPageProps {
    params: {
        locale: "en" | "ar";
    };
}

export default function ContactPage({params: {locale}} : ContactPageProps) {
    unstable_setRequestLocale(locale);

    const lang = useTranslations('contactPage');

    return (
        <>
            <main>


                <AnimatedSection className="py-2 h-[50vh]" id='contact-section'>
                    <Container className='h-full flex flex-col justify-center items-center'>
                        <div className='flex flex-col lg:flex-row w-full lg:w-9/12 h-72 rounded-lg shadow-2xl'>
                            <div className='flex flex-col lg:w-6/12 h-72 bg-zinc-700 rounded-t-lg lg:rounded-t-none lg:ltr:rounded-l-lg lg:rtl:rounded-r-lg'>

                            </div>
                            <div className='flex flex-col lg:w-6/12 h-72 bg-cyan-500 rounded-b-lg lg:rounded-b-none lg:ltr:rounded-r-lg lg:rtl:rounded-l-lg'>

                            </div>
                        </div>
                    </Container>
                </AnimatedSection>

                <iframe
                    src={Data.companyMapsLocation}
                    loading="lazy"
                    className="border-0 w-full mt-20 h-72"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </main>
        </>
    );
}
