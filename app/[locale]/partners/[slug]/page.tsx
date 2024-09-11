import React from 'react';
import {useTranslations} from "next-intl";
import AnimatedSection from '@/Components/Animation/AnimatedSection';
import Container from '@/app/[locale]/Components/Layout/Container';
import config from '@/helpers/config.helper';
import ImageWrapper from '@/app/[locale]/Components/Layout/ImageWrapper';
import {unstable_setRequestLocale} from 'next-intl/server';

interface PartnerItemPageProps {
    params: {
        locale: "en" | "ar";
        slug: string;
    };
}

async function getData(locale: 'en' | 'ar', slug: string){
    const response = await fetch(`${config.AppUrl}/client/partners/getPartnerBySlug`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': locale,
        },
        body: JSON.stringify({
            "slug": slug
        }),
        next:{ revalidate: config.Revalidate }
    });

    return response.json();
}

const PartnerItemContent: React.FC<{locale: 'en'|'ar', slug: string}> = async ({locale, slug}) => {

    const partnerItem = await getData(locale, slug);



   return (
   <div className='flex flex-col gap-6'>
         <ImageWrapper
         className='h-60 shadow-lg rounded lg:w-[50%] block mt-4'
         imageClass='rounded'
         src={`${config.AppStorage}/${partnerItem.image}`}
         alt='partner item image'/>
         <h1 className='font-roboto rtl:font-cairo font-bold text-xl text-black border-b-2 border-b-amber-500 inline-block pb-2 mb-2 w-[50%]'>{partnerItem?.title}</h1>
         <div className='font-roboto rtl:font-cairo lg:w-[50%]'
         dangerouslySetInnerHTML={{__html: partnerItem?.description}}/>
   </div>
   )
}

export default function PartnerViewPage({params: {locale, slug}} : PartnerItemPageProps) {
   unstable_setRequestLocale(locale);

   const lang = useTranslations('partnersPage');



    return (
      <>
          <main>
          <Container className='min-h-[70vh]'>
            <AnimatedSection>
               <PartnerItemContent locale={locale} slug={slug}/>
            </AnimatedSection>
          </Container>
          </main>
      </>
    );
}
