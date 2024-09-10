import React from 'react';
import config from '@/helpers/config.helper';
import Container from "@/app/[locale]/Components/Layout/Container";
import AnimatedSection from "@/Components/Animation/AnimatedSection";
import { Link } from '@/helpers/navigation';
import { useTranslations } from "next-intl";

interface propTypes {
    locale: 'en' | 'ar'
}

async function getData(locale: 'en' | 'ar'){
    const response = await fetch(`${config.AppUrl}/client/data/getData`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': locale,
        },
        body: JSON.stringify({
            "group": "about_us"
        }),
        next:{ revalidate: config.Revalidate }
    });

    return response.json();
}

const AboutSection: React.FC<propTypes> = async ({locale}) => {

    const lang = useTranslations('homePage');

    const data = await getData(locale);

    return (
        <AnimatedSection className="py-2 lg:mt-6" id='about-section'>
            <Container className='h-full gap-7 lg:gap-5 flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-roboto rtl:font-cairo font-semibold text-center'>
                    {data?.home_page_title}
                </h1>
                <p className='text-xl font-roboto rtl:font-cairo font-light text-center'>
                    {data?.home_page_description}
                </p>
                <Link className='font-roboto rtl:font-cairo transition-all ease-in-out duration-300 border border-black rounded-full py-1 px-2 hover:bg-zinc-800 hover:text-white' href={'/about'}>
                {lang('about_us_button')}
                </Link>
            </Container>
        </AnimatedSection>
    );
}

export default AboutSection;