import React from 'react';
import Container from "@/app/[locale]/Components/Layout/Container";
import config from '@/helpers/config.helper';
import AnimatedSection from "@/Components/Animation/AnimatedSection";
import {useTranslations} from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';
import DownloadButton from '@/app/[locale]/reports/Components/DownLoadButton';

interface AboutPageProps {
    params: {
        locale: "en" | "ar";
    };
}

async function getData(locale: 'en' | 'ar'){
    const response = await fetch(`${config.AppUrl}/client/documents/getAllDocuments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': locale,
        },
        body: JSON.stringify({
         "order" : "asc",
         "limit" : 4,
        }),
        next:{ revalidate: config.Revalidate }
    });

    return response.json();
}


const ReportsPageContent: React.FC<{locale:'en' | 'ar'}> = async ({locale}) => {

    const reports = await getData(locale);

    return (
    <>
        {reports.map((report: any) => {
           return <div className='flex flex-col bg-white p-4 w-4/12 rounded gap-2 items-center shadow-xl' key={report.id}>
              {report.title}
              <DownloadButton fileName={report.title} fileUrl={`${config.AppStorage}/${report.document_path}`}/>
           </div>
        })}
    </>
    )

}


export default function ReportsPage({params: {locale}} : AboutPageProps) {
    unstable_setRequestLocale(locale);

    const lang = useTranslations('aboutPage');

    return (
        <>
            <main>
                <AnimatedSection className="py-2 h-[70vh] mt-28" id='contact-section'>
                <Container className='flex flex-col items-center gap-7 lg:gap-19'>
                     <ReportsPageContent locale={locale}/>
                </Container>
                </AnimatedSection>
            </main>
        </>
    );
}
