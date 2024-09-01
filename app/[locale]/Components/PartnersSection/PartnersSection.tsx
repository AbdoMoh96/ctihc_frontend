import React from 'react';
import {useTranslations} from "next-intl";
import Container from "@/app/[locale]/Components/Layout/Container";
import AnimatedSection from "@/Components/Animation/AnimatedSection";
import config from '@/helpers/config.helper';

interface propTypes {
    locale : "en" | "ar";
}

async function getData(locale: 'en' | 'ar'){
    const response = await fetch(`${config.AppUrl}/client/partners/getAllPartners`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': locale,
        },
        body: JSON.stringify({
         "limit" : 4,
        }),
        next:{ revalidate: config.Revalidate }
    });

    return response.json();
}

const PartnersSection : React.FC<propTypes> = async ({locale}) => {

    const lang = useTranslations('homePage');

    let partners = await getData(locale);

    return <AnimatedSection className="py-2 mt-28" id='services-section'>
        <Container className='gap-7 lg:gap-5 flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-roboto rtl:font-cairo font-semibold text-center'>{lang('partners_title')}</h1>
            <div className='w-full py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>

                {partners?.map((partner: any) => {
                    return <div
                        key={partner.id}
                        className='w-full flex flex-col shadow-xl h-72 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out lg:hover:scale-105'>
                        <div
                            className='rounded-t-2xl  bg-cover h-[80%]' style={{ backgroundImage: "url(" + `${config.AppStorage}/${partner.image}` + ")" }}/>
                        <div
                            className='text-black bg-white h-[20%] font-roboto rtl:font-cairo flex flex-col justify-center items-center gap-1 rounded-b-2xl p-2'>
                            <h4>
                                {partner.title}
                            </h4>
                        </div>
                    </div>
                })}

            </div>
            <button
                className='font-roboto rtl:font-cairo transition-all ease-in-out duration-300 border border-black rounded-full py-1 px-2 hover:bg-zinc-800 hover:text-white'>
                {lang('partners_button')}
            </button>
        </Container>
    </AnimatedSection>
}

export default PartnersSection;