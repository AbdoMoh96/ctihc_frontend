import React from 'react';
import HeroSlider from "@/app/Components/HeroSlider";
import slides from "@/Data/heroSlidesData";
import AboutSection from "@/app/Components/AboutSection";
import NewsSection from "@/app//Components/NewsSection";
import PartnersSection from "@/app/Components/PartnersSection";
import Map from "@/app/Components/Map";

export default function HomePage() {

    return (
      <>
          <main>
              <section className='h-[70vh]' id="hero-section">
                  <HeroSlider slides={slides}/>
              </section>

              <AboutSection/>

              <NewsSection/>


              <PartnersSection/>

              <Map className='h-60 mt-24'/>
          </main>
      </>
    );
}
