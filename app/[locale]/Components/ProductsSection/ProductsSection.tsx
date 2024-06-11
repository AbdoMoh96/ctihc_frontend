'use client'
import React from 'react';
import {useTranslations} from "next-intl";
import Container from "@/app/[locale]/Components/Layout/Container";
import AnimatedSection from "@/Components/Animation/AnimatedSection";
import { useParams } from 'next/navigation';
import products from "@/Data/productsData";


interface propTypes {}

const ProductsSection : React.FC<propTypes> = () => {

    const lang = useTranslations('homePage');
    const {locale} = useParams<{ locale: "en" | "ar"}>();


    return <AnimatedSection className="py-2 mt-28" id='services-section'>
        <Container className='gap-7 lg:gap-5 flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-roboto rtl:font-cairo font-semibold text-center'>{lang('products_title')}</h1>
            <div className='w-full py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>

                {products.map((productItem: any) => {
                    return <div
                        key={productItem.id}
                        className='w-full flex flex-col shadow-xl h-72 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out lg:hover:scale-105'>
                        <div
                            className='rounded-t-2xl  bg-cover h-[80%]' style={{ backgroundImage: "url(" + productItem.image + ")"}}/>
                        <div
                            className='text-black bg-white h-[20%] font-roboto rtl:font-cairo flex flex-col justify-center items-center gap-1 rounded-b-2xl p-2'>
                            <h4>
                                {productItem['title_' + locale]}
                            </h4>
                        </div>
                    </div>
                })}

            </div>
            <button
                className='font-roboto rtl:font-cairo transition-all ease-in-out duration-300 border border-black rounded-full py-1 px-2 hover:bg-zinc-800 hover:text-white'>
                {lang('products_button')}
            </button>
        </Container>
    </AnimatedSection>
}

export default ProductsSection;