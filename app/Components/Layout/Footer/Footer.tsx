import React from 'react';
import Container from "@/app/Components/Layout/Container";
import Image from 'next/image';
import Link from "next/link";


interface propTypes {}

const Footer: React.FC<propTypes> = () => {

    return (
        <footer className="py-2  bg-zinc-800">
            <Container className='gap-7 lg:gap-5 flex flex-col justify-center items-center '>
                <div className='w-full py-2 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-16'>
                    <div className='py-2 flex flex-col gap-2'>
                        <div className='flex flex-row items-center gap-2'>
                            <Image src='/assets/images/ctihc_logo.png' alt='ctihc_logo' height={100} width={80}/>
                            <h1 className='text-white font-roboto font-semibold capitalize'>cotton & textile industries
                                holding</h1>

                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <Image src='/assets/images/ctihc_second_logo.png' className='rounded-lg' alt='ctihc_logo' height={100} width={80}/>
                            <h1 className='text-white font-roboto font-semibold capitalize'>Ministry of Public Business Sector</h1>

                        </div>
                    </div>
                    <div className='py-2 flex flex-col items-center lg:items-start text-xl lg:text-base'>
                        <h1 className='font-roboto mb-2 font-semibold text-white capitalize'>browse</h1>
                        <div className='flex flex-col font-roboto text-gray-400 items-center gap-2 lg:items-start'>
                            <Link className='transition-all duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href='#'>home</Link>
                            <Link className='transition-all duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href='#'>About Us</Link>
                            <Link className='transition-all duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href='#'>Reports</Link>
                            <Link className='transition-all duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href='#'>Group Structure</Link>
                            <Link className='transition-all duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href='#'>News</Link>
                            <Link className='transition-all duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href='#'>Contact Us</Link>
                        </div>
                    </div>
                    <div className='py-2 flex flex-col items-center lg:items-start text-xl lg:text-base'>
                        <h1 className='font-roboto mb-2 font-semibold text-white capitalize'>Follow Us On</h1>
                        <div className='flex flex-col font-roboto text-gray-400 items-center gap-2 lg:items-start'>
                            <Link className='transition-all duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href='#'>home</Link>
                            <Link className='transition-all duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href='#'>about</Link>
                            <Link className='transition-all duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href='#'>contact us</Link>
                            <Link className='transition-all duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href='#'>sections</Link>
                        </div>
                    </div>
                    <div className='py-2 flex flex-col items-center lg:items-start text-xl lg:text-base'>
                        <h1 className='font-roboto mb-2 font-semibold text-white capitalize'>Contact Us</h1>
                        <div className='flex flex-col font-roboto text-gray-400 items-center gap-2 lg:items-start'>
                            <Link className='transition-all duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href='#'>home</Link>
                            <Link className='transition-all duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href='#'>about</Link>
                            <Link className='transition-all duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href='#'>contact us</Link>
                            <Link className='transition-all duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href='#'>sections</Link>
                        </div>
                    </div>
                </div>
            </Container>
            <section className='flex flex-col justify-center items-center text-white font-light font-roboto gap-7 border-t border-white pt-8 my-5'>
                <span>Privacy Policy and Disclaimer</span>
                <span>© Holding Company for Cotton and Textiles (CTIHC) - 2024</span>
            </section>
        </footer>
    )
}

export default Footer;