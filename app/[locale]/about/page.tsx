import React from 'react';
import Container from "@/app/[locale]/Components/Layout/Container";
import AnimatedSection from "@/Components/Animation/AnimatedSection";
import {useTranslations} from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';

interface AboutPageProps {
    params: {
        locale: "en" | "ar";
    };
}

export default function AboutPage({params: {locale}} : AboutPageProps) {
    unstable_setRequestLocale(locale);

    const lang = useTranslations('aboutPage');

    return (
        <>
            <main>


                <AnimatedSection className="py-2 h-[70vh] mt-28" id='contact-section'>
                    <Container className='gap-7 lg:gap-5 flex flex-col justify-center items-center'>
                        <h1>about</h1>
                    </Container>
                </AnimatedSection>


            </main>
        </>
    );
}
