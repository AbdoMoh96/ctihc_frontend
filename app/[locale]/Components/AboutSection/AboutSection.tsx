'use client'
import React,{useEffect, useState} from 'react';
import Container from "@/app/[locale]/Components/Layout/Container";
import AnimatedSection from "@/Components/Animation/AnimatedSection";
import useAxiosInstance from '@/hooks/axios.hook';
import { useTranslations } from "next-intl";


interface propTypes {}

const AboutSection: React.FC<propTypes> = () => {

    const lang = useTranslations('homePage');
    const [data, setData] = useState<any>();
    const axiosInstance = useAxiosInstance();

    useEffect(() => {

        axiosInstance.post('/client/data/getData', {
            "group" : "about_us"
        }).then(response => setData(response.data));

    }, []);


    return (
        <AnimatedSection className="py-2 lg:mt-6" id='about-section'>
            <Container className='h-full gap-7 lg:gap-5 flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-roboto rtl:font-cairo font-semibold text-center'>
                    {data?.home_page_title}
                </h1>
                <p className='text-xl font-roboto rtl:font-cairo font-light text-center'>
                    {data?.home_page_description}
                </p>
                <button
                    className='font-roboto transition-all ease-in-out duration-300 border border-black rounded-full py-1 px-2 hover:bg-zinc-800 hover:text-white'>
                    {lang('about_us_button')}
                </button>
            </Container>
        </AnimatedSection>
    );
}

export default AboutSection;