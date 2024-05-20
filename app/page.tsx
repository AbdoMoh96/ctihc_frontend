import React from 'react';
import HeroSlider from "@/app/Components/HeroSlider";
import slides from "@/Data/heroSlidesData";

export default function HomePage() {
  return (
      <>
        <main className="bg-amber-50">
              <section className='h-[70vh]' id="hero section">
                   <HeroSlider slides={slides}/>
              </section>
        </main>
      </>
  );
}
