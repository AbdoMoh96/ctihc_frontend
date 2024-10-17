import React from 'react';
import AnimatedSection from '@/Components/Animation/AnimatedSection';
import Container from '@/app/Components/Layout/Container';
import config from '@/helpers/config.helper';
import ImageWrapper from '@/app/Components/Layout/ImageWrapper';

interface PartnerItemPageProps {
    params: {
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
   <div className='flex flex-col lg:w-[50%] mx-auto gap-6 my-20'>
         <ImageWrapper
         className='h-72 w-72 mx-auto shadow-lg rounded block mt-4'
         imageClass='rounded'
         src={`${config.AppStorage}/${partnerItem.image}`}
         alt='partner item image'/>
         <h1 className='font-roboto text-center rtl:font-cairo font-bold text-xl text-black border-b-2 border-b-amber-500 inline-block pb-2 mb-2'>{partnerItem?.title}</h1>
         <div className='text-center font-roboto rtl:font-cairo'
         dangerouslySetInnerHTML={{__html: partnerItem?.description}}/>
   </div>
   )
}

export default function PartnerViewPage({params: {slug}} : PartnerItemPageProps) {

    return (
      <>
          <main>
          <Container className='min-h-[70vh]'>
            <AnimatedSection>
               <PartnerItemContent locale='en' slug={slug}/>
            </AnimatedSection>
          </Container>
          </main>
      </>
    );
}
