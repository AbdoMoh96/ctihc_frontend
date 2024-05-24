import React from 'react';
import HeroSlider from "@/app/Components/HeroSlider";
import slides from "@/Data/heroSlidesData";
import Container from "@/app/Components/Layout/Container";
import AnimatedSection from "@/Components/Animation/AnimatedSection";
import Data from "@/Data/data";

export default function HomePage() {
  return (
      <>
          <main>
              <section className='h-[70vh]' id="hero-section">
                  <HeroSlider slides={slides}/>
              </section>
              <AnimatedSection className="py-2 lg:mt-6" id='about-section'>
                  <Container className='h-full gap-7 lg:gap-5 flex flex-col justify-center items-center'>
                      <h1 className='text-2xl font-roboto font-semibold text-center'>Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit.</h1>
                      <p className='text-xl font-roboto font-light text-center'>Lorem ipsum dolor sit amet, consectetur
                          adipisicing elit. Ad animi dolorum eum non odit, quas quo sapiente similique vero
                          voluptas.</p>
                      <button
                          className='font-roboto transition-all ease-in-out duration-300 border border-black rounded-full py-1 px-2 hover:bg-zinc-800 hover:text-white'>
                          know more
                      </button>
                  </Container>
              </AnimatedSection>

              <AnimatedSection className="py-2 mt-28" id='news-section'>
                  <Container className='gap-7 lg:gap-5 flex flex-col justify-center items-center'>
                      <h1 className='text-3xl font-roboto font-semibold text-center'>latest news</h1>
                      <div className='w-full py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>

                          <div
                              className='transition-all group relative ease-in-out duration-300 w-full flex flex-col-reverse  p-3 h-72 rounded-2xl cursor-pointer bg-[url("https://images.unsplash.com/photo-1491036775913-3fbc5c455842")] bg-cover'>
                              <div
                                  className='transition-all ease-in-out duration-300 absolute top-0 z-10 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-50 bg-gradient-to-b from-transparent to-gray-950'/>
                              <h4 className='text-white font-roboto z-20'>Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Eius, repudiandae!</h4>
                          </div>

                          <div
                              className='transition-all group relative ease-in-out duration-300 w-full flex flex-col-reverse  p-3 h-72 rounded-2xl cursor-pointer bg-[url("https://images.unsplash.com/photo-1491036775913-3fbc5c455842")] bg-cover'>
                              <div
                                  className='transition-all ease-in-out duration-300 absolute top-0 z-10 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-50 bg-gradient-to-b from-transparent to-gray-950'/>
                              <h4 className='text-white font-roboto z-20'>Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Eius, repudiandae!</h4>
                          </div>

                          <div
                              className='transition-all group relative ease-in-out duration-300 w-full flex flex-col-reverse  p-3 h-72 rounded-2xl cursor-pointer bg-[url("https://images.unsplash.com/photo-1553432172-f37667f5ed15")] bg-cover'>
                              <div
                                  className='transition-all ease-in-out duration-300 absolute top-0 z-10 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-50 bg-gradient-to-b from-transparent to-gray-950'/>
                              <h4 className='text-white font-roboto z-20'>Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Eius, repudiandae!</h4>
                          </div>

                          <div
                              className='transition-all group relative ease-in-out duration-300 w-full flex flex-col-reverse  p-3 h-72 rounded-2xl cursor-pointer bg-[url("https://images.unsplash.com/photo-1553432172-f37667f5ed15")] bg-cover'>
                              <div
                                  className='transition-all ease-in-out duration-300 absolute top-0 z-10 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-50 bg-gradient-to-b from-transparent to-gray-950'/>
                              <h4 className='text-white font-roboto z-20'>Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Eius, repudiandae!</h4>
                          </div>
                      </div>
                      <button
                          className='font-roboto transition-all ease-in-out duration-300 border border-black rounded-full py-1 px-2 hover:bg-zinc-800 hover:text-white'>
                          show all news
                      </button>
                  </Container>
              </AnimatedSection>


              <AnimatedSection className="py-2 mt-28" id='services-section'>
                  <Container className='gap-7 lg:gap-5 flex flex-col justify-center items-center'>
                      <h1 className='text-3xl font-roboto font-semibold text-center'>our services</h1>
                      <div className='w-full py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                      <div
                              className='w-full flex flex-col shadow-xl h-72 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out lg:hover:scale-105'>
                              <div
                                  className='rounded-t-2xl bg-[url("https://images.unsplash.com/photo-1491036775913-3fbc5c455842")] bg-cover h-[80%]'/>
                              <div
                                  className='text-black bg-white h-[20%] font-roboto flex flex-col justify-center items-center gap-1 rounded-b-2xl p-2'>
                                  <h4>
                                      Lorem ipsum dolor sit amet
                                  </h4>
                              </div>
                          </div>
                          <div
                              className='w-full flex flex-col shadow-xl h-72 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out lg:hover:scale-105'>
                              <div
                                  className='rounded-t-2xl bg-[url("https://images.unsplash.com/photo-1491036775913-3fbc5c455842")] bg-cover h-[80%]'/>
                              <div
                                  className='text-black bg-white h-[20%] font-roboto flex flex-col justify-center items-center gap-1 rounded-b-2xl p-2'>
                                  <h4>
                                      Lorem ipsum dolor sit amet
                                  </h4>
                              </div>
                          </div>
                          <div
                              className='w-full flex flex-col shadow-xl h-72 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out lg:hover:scale-105'>
                              <div
                                  className='rounded-t-2xl bg-[url("https://images.unsplash.com/photo-1491036775913-3fbc5c455842")] bg-cover h-[80%]'/>
                              <div
                                  className='text-black bg-white h-[20%] font-roboto flex flex-col justify-center items-center gap-1 rounded-b-2xl p-2'>
                                  <h4>
                                      Lorem ipsum dolor sit amet
                                  </h4>
                              </div>
                          </div>
                          <div
                              className='w-full flex flex-col shadow-xl h-72 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out lg:hover:scale-105'>
                              <div
                                  className='rounded-t-2xl bg-[url("https://images.unsplash.com/photo-1491036775913-3fbc5c455842")] bg-cover h-[80%]'/>
                              <div
                                  className='text-black bg-white h-[20%] font-roboto flex flex-col justify-center items-center gap-1 rounded-b-2xl p-2'>
                                  <h4>
                                      Lorem ipsum dolor sit amet
                                  </h4>
                              </div>
                          </div>
                      </div>
                      <button
                          className='font-roboto transition-all ease-in-out duration-300 border border-black rounded-full py-1 px-2 hover:bg-zinc-800 hover:text-white'>
                          show all services
                      </button>
                  </Container>
              </AnimatedSection>

              <iframe
                  src={Data.companyMapsLocation}
                   loading="lazy"
                   className="border-0 w-full mt-20 h-60"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
          </main>
      </>
  );
}
