'use client'
import React,{useEffect, useState} from 'react';
import Container from "@/app/[locale]/Components/Layout/Container";
import AnimatedSection from "@/Components/Animation/AnimatedSection";
import { useParams } from 'next/navigation';
import AppWrite from "@/helpers/appwrite.helper";

interface propTypes {}

const AboutSection : React.FC<propTypes> = () => {

    const {locale} = useParams<{ locale: "en" | "ar"}>();
    const [data, setData] = useState<any>({});

    useEffect(() => {
        AppWrite.readData('about_us').then(response => {
            setData(response);
        }).catch(error => console.log(error));
    }, []);


    return <AnimatedSection className="py-2 lg:mt-6" id='about-section'>
        <Container className='h-full gap-7 lg:gap-5 flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-roboto rtl:font-cairo font-semibold text-center'>{data[`home_page_title_${locale}`]}</h1>
            <p className='text-xl font-roboto rtl:font-cairo font-light text-center'>{data[`home_page_description_${locale}`]}</p>
            <button
                className='font-roboto transition-all ease-in-out duration-300 border border-black rounded-full py-1 px-2 hover:bg-zinc-800 hover:text-white'>
                know more
            </button>
        </Container>
    </AnimatedSection>
}

export default AboutSection;