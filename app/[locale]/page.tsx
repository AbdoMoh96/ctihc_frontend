import React from 'react';
import HeroSlider from "@/app/[locale]/Components/HeroSlider";
import slides from "@/Data/heroSlidesData";
import news from "@/Data/newsData";
import products from "@/Data/productsData";
import Container from "@/app/[locale]/Components/Layout/Container";
import AnimatedSection from "@/Components/Animation/AnimatedSection";
import {useTranslations} from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';
import Data from "@/Data/data";
import AboutSection from "@/app/[locale]/Components/AboutSection";
import NewsSection from "@/app/[locale]/Components/NewsSection";
import ProductsSection from "@/app/[locale]/Components/ProductsSection";
import Map from "@/app/[locale]/Components/Map";

interface HomePageProps {
    params: {
        locale: "en" | "ar";
    };
}

export default function HomePage({params: {locale}} : HomePageProps) {
    unstable_setRequestLocale(locale);

    const lang = useTranslations('homePage');

    return (
      <>
          <main>
              <section className='h-[70vh]' id="hero-section">
                  <HeroSlider slides={slides}/>
              </section>

              <AboutSection/>

              <NewsSection/>


              <ProductsSection/>

              <Map className='h-60 mt-24'/>
          </main>
      </>
    );
}
