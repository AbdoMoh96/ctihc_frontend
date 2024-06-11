'use client'
import React from 'react';
import {useTranslations} from "next-intl";
import Container from "@/app/[locale]/Components/Layout/Container";
import news from "@/Data/newsData";
import AnimatedSection from "@/Components/Animation/AnimatedSection";
import { useParams } from 'next/navigation';


interface propTypes {}

const NewsSection : React.FC<propTypes> = () => {

    const lang = useTranslations('homePage');
    const {locale} = useParams<{ locale: "en" | "ar"}>();


    return <AnimatedSection className="py-2 mt-28" id='news-section'>
        <Container className='gap-7 lg:gap-5 flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-roboto rtl:font-cairo font-semibold text-center'>{lang('news_title')}</h1>
            <div className='w-full py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>

                {news.map((newsItem: any) => {
                    return <div
                        key={newsItem.id}
                        className={`transition-all group relative ease-in-out duration-300 w-full flex flex-col-reverse  p-3 h-72 rounded-2xl cursor-pointer bg-cover`} style={{ backgroundImage: "url(" + newsItem.image + ")" }}>
                        <div
                            className='transition-all ease-in-out duration-300 absolute top-0 z-10 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-50 bg-gradient-to-b from-transparent to-gray-950'/>
                        <h4 className='text-white font-roboto rtl:font-cairo z-20'>{newsItem['title_' + locale]}</h4>
                    </div>
                })}

            </div>
            <button
                className='font-roboto rtl:font-cairo transition-all ease-in-out duration-300 border border-black rounded-full py-1 px-2 hover:bg-zinc-800 hover:text-white'>
                {lang('news_button')}
            </button>
        </Container>
    </AnimatedSection>
}

export default NewsSection;