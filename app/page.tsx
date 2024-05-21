import React from 'react';
import HeroSlider from "@/app/Components/HeroSlider";
import slides from "@/Data/heroSlidesData";
import Container from "@/app/Components/Layout/Container";

export default function HomePage() {
  return (
      <>
        <main>
              <section className='h-[70vh]' id="hero section">
                   <HeroSlider slides={slides}/>
              </section>
              <section className="h-[15vh]" id='about section'>
                  <Container className='h-full gap-5 flex flex-col justify-center items-center'>
                      <h1 className='text-2xl font-roboto font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                      <p className='text-xl font-roboto font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi dolorum eum non odit, quas quo sapiente similique vero voluptas.</p>
                      <button className='font-roboto transition-all ease-in-out duration-300 border border-black rounded-full py-1 px-2 hover:bg-zinc-800 hover:text-white'>
                          know more
                      </button>
                  </Container>
              </section>

              <section className="h-[15vh]" id='news section'>

              </section>
        </main>
      </>
  );
}
