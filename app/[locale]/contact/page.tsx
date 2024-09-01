import React from 'react';
import Container from "@/app/[locale]/Components/Layout/Container";
import AnimatedSection from "@/Components/Animation/AnimatedSection";
import {useTranslations} from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';
import ContactForm from "@/app/[locale]/contact/Components/ContactForm";
import Map from "@/app/[locale]/Components/Map";
import ContactInfo from "@/app/[locale]/contact/Components/ContactInfo";

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
                <AnimatedSection className="my-2 py-6 lg:min-h-[50vh]" id='contact-section'>
                    <Container className='h-full flex flex-col justify-center items-center'>
                        <div className='flex flex-col gap-7 lg:gap-2 lg:flex-row p-5 w-full lg:w-9/12 rounded-lg shadow-2xl font-roboto rtl:font-cairo'>
                            <ContactForm/>
                            <ContactInfo locale={locale}/>
                        </div>
                    </Container>
                </AnimatedSection>
                <Map locale={locale} className='h-72'/>
            </main>
        </>
    );
}
