import React from 'react';
import Container from "@/app/[locale]/Components/Layout/Container";
import AnimatedSection from "@/Components/Animation/AnimatedSection";
import config from '@/helpers/config.helper';
import {useTranslations} from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';

interface AboutPageProps {
    params: {
        locale: "en" | "ar";
    };
}

async function getData(locale: 'en' | 'ar'){
    const response = await fetch(`${config.AppUrl}/client/data/getData`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': locale,
        },
        body: JSON.stringify({
            "group": "group_structure_page"
        }),
        next:{ revalidate: config.Revalidate }
    });

    return response.json();
}

const GroupStructurePageContent: React.FC<{locale: 'en' | 'ar'}> = async ({locale}) => {

    const data = await getData(locale);

   return <Container className='gap-7 lg:gap-5'>
   <h1 className='font-roboto rtl:font-cairo font-bold text-xl text-black border-b-2 border-b-amber-500 inline-block pb-2 mb-2'>{data?.group_structure_title}</h1>
   <div dangerouslySetInnerHTML={{__html: data?.group_structure_description}}/>
</Container>
}

export default function GroupStructurePage({params: {locale}} : AboutPageProps) {
    unstable_setRequestLocale(locale);

    const lang = useTranslations('groupStructurePage');

    return (
        <>
            <main>
                <AnimatedSection className="py-6 min-h-[70vh] mt-4 rtl:mr-6 ml-6" id='contact-section'>
                   <GroupStructurePageContent locale={locale}></GroupStructurePageContent>
                </AnimatedSection>
            </main>
        </>
    );
}
