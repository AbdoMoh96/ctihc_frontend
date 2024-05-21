import React from 'react';
import HeroSlider from "@/app/Components/HeroSlider";
import slides from "@/Data/heroSlidesData";
import Container from "@/app/Components/Layout/Container";

export default function HomePage() {
  return (
      <>
          <main>
              <section className='h-[70vh]' id="hero-section">
                  <HeroSlider slides={slides}/>
              </section>
              <section className="py-2 lg:mt-6" id='about-section'>
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
              </section>

              <section className="py-2 mt-28" id='news-section'>
                  <Container className='gap-7 lg:gap-5 flex flex-col justify-center items-center'>
                      <h1 className='text-3xl font-roboto font-semibold text-center'>latest news</h1>
                      <div className='w-full py-2 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                          <div
                              className='h-72 rounded-2xl cursor-pointer bg-[url("https://images.unsplash.com/photo-1491036775913-3fbc5c455842")] bg-cover'>
                              <div
                                  className=" transition-all ease-in-out duration-300 w-full h-full flex flex-col-reverse rounded-2xl p-3 bg-zinc-800 bg-opacity-0 hover:bg-opacity-30">
                                  <h4 className='text-white font-roboto'>Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Eius, repudiandae!</h4>
                              </div>
                          </div>
                          <div
                              className='h-72 rounded-2xl cursor-pointer bg-[url("https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e")] bg-cover'>
                              <div
                                  className=" transition-all ease-in-out duration-300 w-full h-full flex flex-col-reverse rounded-2xl p-3 bg-zinc-800 bg-opacity-0 hover:bg-opacity-30">
                                  <h4 className='text-white font-roboto'>Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Eius, repudiandae!</h4>
                              </div>
                          </div>
                          <div
                              className='h-72 rounded-2xl cursor-pointer bg-[url("https://images.unsplash.com/photo-1553432172-f37667f5ed15")] bg-cover'>
                              <div
                                  className=" transition-all ease-in-out duration-300 w-full h-full flex flex-col-reverse rounded-2xl p-3 bg-zinc-800 bg-opacity-0 hover:bg-opacity-30">
                                  <h4 className='text-white font-roboto'>Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Eius, repudiandae!</h4>
                              </div>
                          </div>
                      </div>
                      <button
                          className='font-roboto transition-all ease-in-out duration-300 border border-black rounded-full py-1 px-2 hover:bg-zinc-800 hover:text-white'>
                          show all news
                      </button>
                  </Container>
              </section>

              <section className="py-2 mt-28" id='services-section'>
                  <Container className='gap-7 lg:gap-5 flex flex-col justify-center items-center'>
                      <h1 className='text-3xl font-roboto font-semibold text-center'>our services</h1>
                      <div className='w-full py-2 grid grid-cols-1 lg:grid-cols-4 gap-10'>
                          <div
                              className='h-72 rounded-2xl cursor-pointer bg-[url("https://images.unsplash.com/photo-1491036775913-3fbc5c455842")] bg-cover'>
                              <div
                                  className=" transition-all ease-in-out duration-300 w-full h-full flex flex-col-reverse rounded-2xl p-3 bg-zinc-800 bg-opacity-0 hover:bg-opacity-30">
                                  <h4 className='text-white font-roboto'>Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Eius, repudiandae!</h4>
                              </div>
                          </div>
                          <div
                              className='h-72 rounded-2xl cursor-pointer bg-[url("https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e")] bg-cover'>
                              <div
                                  className=" transition-all ease-in-out duration-300 w-full h-full flex flex-col-reverse rounded-2xl p-3 bg-zinc-800 bg-opacity-0 hover:bg-opacity-30">
                                  <h4 className='text-white font-roboto'>Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Eius, repudiandae!</h4>
                              </div>
                          </div>
                          <div
                              className='h-72 rounded-2xl cursor-pointer bg-[url("https://images.unsplash.com/photo-1553432172-f37667f5ed15")] bg-cover'>
                              <div
                                  className=" transition-all ease-in-out duration-300 w-full h-full flex flex-col-reverse rounded-2xl p-3 bg-zinc-800 bg-opacity-0 hover:bg-opacity-30">
                                  <h4 className='text-white font-roboto'>Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Eius, repudiandae!</h4>
                              </div>
                          </div>
                          <div
                              className='h-72 rounded-2xl cursor-pointer bg-[url("https://images.unsplash.com/photo-1491036775913-3fbc5c455842")] bg-cover'>
                              <div
                                  className=" transition-all ease-in-out duration-300 w-full h-full flex flex-col-reverse rounded-2xl p-3 bg-zinc-800 bg-opacity-0 hover:bg-opacity-30">
                                  <h4 className='text-white font-roboto'>Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Eius, repudiandae!</h4>
                              </div>
                          </div>
                          <div
                              className='h-72 rounded-2xl cursor-pointer bg-[url("https://images.unsplash.com/photo-1491036775913-3fbc5c455842")] bg-cover'>
                              <div
                                  className=" transition-all ease-in-out duration-300 w-full h-full flex flex-col-reverse rounded-2xl p-3 bg-zinc-800 bg-opacity-0 hover:bg-opacity-30">
                                  <h4 className='text-white font-roboto'>Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Eius, repudiandae!</h4>
                              </div>
                          </div>
                          <div
                              className='h-72 rounded-2xl cursor-pointer bg-[url("https://images.unsplash.com/photo-1491036775913-3fbc5c455842")] bg-cover'>
                              <div
                                  className=" transition-all ease-in-out duration-300 w-full h-full flex flex-col-reverse rounded-2xl p-3 bg-zinc-800 bg-opacity-0 hover:bg-opacity-30">
                                  <h4 className='text-white font-roboto'>Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Eius, repudiandae!</h4>
                              </div>
                          </div>
                          <div
                              className='h-72 rounded-2xl cursor-pointer bg-[url("https://images.unsplash.com/photo-1491036775913-3fbc5c455842")] bg-cover'>
                              <div
                                  className=" transition-all ease-in-out duration-300 w-full h-full flex flex-col-reverse rounded-2xl p-3 bg-zinc-800 bg-opacity-0 hover:bg-opacity-30">
                                  <h4 className='text-white font-roboto'>Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Eius, repudiandae!</h4>
                              </div>
                          </div>
                          <div
                              className='h-72 rounded-2xl cursor-pointer bg-[url("https://images.unsplash.com/photo-1491036775913-3fbc5c455842")] bg-cover'>
                              <div
                                  className=" transition-all ease-in-out duration-300 w-full h-full flex flex-col-reverse rounded-2xl p-3 bg-zinc-800 bg-opacity-0 hover:bg-opacity-30">
                                  <h4 className='text-white font-roboto'>Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Eius, repudiandae!</h4>
                              </div>
                          </div>
                      </div>
                      <button
                          className='font-roboto transition-all ease-in-out duration-300 border border-black rounded-full py-1 px-2 hover:bg-zinc-800 hover:text-white'>
                          show all services
                      </button>
                  </Container>
              </section>


          </main>
      </>
  );
}
