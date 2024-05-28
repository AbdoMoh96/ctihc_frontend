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


                <AnimatedSection className="py-2 h-[70vh] mt-28" id='contact-section'>
                    <Container className='gap-7 lg:gap-5 flex flex-col justify-center items-center'>
                        <h1>contact</h1>
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
