import React from 'react';
import Container from "@/app/[locale]/Components/Layout/Container";
import AnimatedSection from "@/Components/Animation/AnimatedSection";
import {useTranslations} from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { MdOutlineFax } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import ContactForm from "@/app/[locale]/contact/Components/ContactForm";
import Data from "@/Data/data";
import Map from "@/app/[locale]/Components/Map";

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
                            <div
                                className='flex flex-col justify-between items-center gap-6 w-full h-full lg:w-6/12 rounded-t-lg lg:rounded-t-none lg:ltr:rounded-l-lg lg:rtl:rounded-r-lg'>
                                <h1 className='border-b-2 pb-2 border-amber-500'>{lang('contact_us')}</h1>
                                <div className='flex justify-center items-center gap-5 border-2 border-gray-400 transition-all w-8/12 duration-300 ease-in-out p-5 rounded-lg hover:border-amber-500 hover:text-amber-500'>
                                    <CiLocationOn size={30}/>{lang('address')}
                                </div>
                                <div className='flex justify-center items-center gap-5 border-2 border-gray-400 transition-all w-8/12 duration-300 ease-in-out p-5 rounded-lg hover:border-amber-500 hover:text-amber-500'>
                                    <LuPhone size={30}/> 23905153-23953447(202)
                                </div>
                                <div className='flex justify-center items-center gap-5 border-2 border-gray-400 transition-all w-8/12 duration-300 ease-in-out p-5 rounded-lg hover:border-amber-500 hover:text-amber-500'>
                                    <MdOutlineFax size={30}/>23903235-23955922(202)
                                </div>
                                <div className='flex justify-center items-center gap-5 border-2 border-gray-400 transition-all w-8/12 duration-300 ease-in-out p-5 rounded-lg hover:border-amber-500 hover:text-amber-500'>
                                    <MdOutlineEmail size={30}/>contact@ctihc.com
                                </div>
                            </div>
                        </div>
                    </Container>
                </AnimatedSection>

                <Map className='h-72'/>
            </main>
        </>
    );
}
