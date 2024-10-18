import React from 'react';
import Container from "@/app/[locale]/Components/Layout/Container";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { MdOutlineFax } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import {getTranslations} from "next-intl/server";
import config from '@/helpers/config.helper';
import Image from 'next/image';
import Link from "next/link";


interface propTypes {
    locale: 'en' | 'ar';
}

async function getData(locale: 'en' | 'ar'){
    const [contactsResponse, settingsResponse] = await Promise.all([
        fetch(`${config.AppUrl}/client/data/getData`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Language': locale,
            },
            body: JSON.stringify({
                "group": "contact_us"
            }),
            next: { revalidate: config.Revalidate }
        }),
        fetch(`${config.AppUrl}/client/data/getData`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Language': locale,
            },
            body: JSON.stringify({
                "group": "settings"
            }),
            next: { revalidate: config.Revalidate }
        })
    ]);

    return {
        contactUs: await contactsResponse.json(),
        settings: await settingsResponse.json()
    };
}

const Footer: React.FC<propTypes> = async ({locale}) => {

    const lang = await getTranslations('footer');
    const { contactUs, settings } = await getData(locale);


    return (
        <footer className="py-2  bg-zinc-800">
            <Container className='gap-7 lg:gap-5 flex flex-col justify-center items-center '>
                <div className='w-full py-2 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-16'>
                    <div className='py-2 flex flex-col gap-2'>
                        <div className='flex flex-row items-center gap-2'>
                            <Image src={config.AppStorage+'/'+settings['ctihc_logo']} alt='ctihc_logo' height={100} width={80}/>
                            <h1 className='text-white font-roboto rtl:font-cairo font-semibold capitalize'>{settings['ctihc_logo_text']}</h1>

                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <Image src={config.AppStorage+'/'+settings['ctihc_second_logo']} className='rounded-lg' alt='ctihc_logo' height={100} width={80}/>
                            <h1 className='text-white font-roboto rtl:font-cairo font-semibold capitalize'>{settings['ctihc_second_logo_text']}</h1>

                        </div>
                    </div>
                    <div className='py-2 flex flex-col items-center lg:items-start text-xl lg:text-base'>
                        <h1 className='font-roboto rtl:font-cairo mb-2 font-semibold text-white capitalize'>{lang('browse')}</h1>
                        <div className='flex flex-col font-roboto rtl:font-cairo text-gray-400 items-center gap-2 lg:items-start'>
                            <Link className='transition-all duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href='#'>{lang('home')}</Link>
                            <Link className='transition-all duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href='#'>{lang('about_us')}</Link>
                            <Link className='transition-all duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href='#'>{lang('reports')}</Link>
                            <Link className='transition-all duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href='#'>{lang('group_structure')}</Link>
                            <Link className='transition-all duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href='#'>{lang('news')}</Link>
                            <Link className='transition-all duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href='#'>{lang('contact_us')}</Link>
                        </div>
                    </div>
                    <div className='py-2 flex flex-col items-center lg:items-start text-xl lg:text-base'>
                        <h1 className='font-roboto rtl:font-cairo mb-2 font-semibold text-white capitalize'>{lang('follow_us_on')}</h1>
                        <div className='flex flex-col font-roboto rtl:font-cairo text-gray-400 items-center gap-2 lg:items-start'>
                            {
                                contactUs?.facebook?.length > 0 &&
                                <Link className='transition-all capitalize flex items-center gap-1 duration-500 ease-in-out hover:text-amber-500 w-fit'
                                      href={contactUs?.facebook} target='_blank' ><FaFacebook size={20}/> facebook</Link>
                            }
                            {
                                contactUs?.twitter?.length > 0 &&
                            <Link className='transition-all capitalize flex items-center gap-1 duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href={contactUs?.twitter} target='_blank'><FaXTwitter size={20}/> twitter</Link>
                            }
                            {
                                contactUs?.linkedIn?.length > 0 &&
                            <Link className='transition-all capitalize flex items-center gap-1 duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href={contactUs?.linkedIn} target='_blank'><FaLinkedinIn size={20}/>linkedIn</Link>
                            }
                            {
                                contactUs?.whatsApp?.length > 0 &&
                                <Link className='transition-all capitalize flex items-center gap-1 duration-500 ease-in-out hover:text-amber-500 w-fit'
                                      href={contactUs?.whatsApp} target='_blank'><FaWhatsapp size={20}/>whatsApp</Link>
                            }

                        </div>
                    </div>
                    <div className='py-2 flex flex-col items-center lg:items-start text-xl lg:text-base'>
                        <h1 className='font-roboto rtl:font-cairo mb-2 font-semibold text-white capitalize'>{lang('contact_us')}</h1>
                        <div className='flex flex-col font-roboto rtl:font-cairo text-gray-400 items-center gap-2 lg:items-start'>
                            <Link className='transition-all capitalize flex items-center gap-1 duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href={contactUs?.location_short_url} target="_blank"><CiLocationOn size={20}/>{contactUs['address']}</Link>
                            <Link className='transition-all capitalize flex items-center gap-1 duration-500 ease-in-out hover:text-amber-500 w-fit'
                                  href={'tel:'+contactUs.phone_action}><LuPhone size={20}/> {contactUs?.phone}</Link>
                            {contactUs?.fax?.length > 0 &&
                                <span
                                    className='transition-all capitalize flex items-center gap-1 duration-500 ease-in-out hover:text-amber-500 w-fit'
                                ><MdOutlineFax size={20}/>{contactUs?.fax}</span>
                            }
                            <Link
                                className='transition-all flex items-center gap-1 duration-500 ease-in-out hover:text-amber-500 w-fit'
                                href={'mailto:'+contactUs.email}><MdOutlineEmail size={20}/>{contactUs?.email}</Link>
                        </div>
                    </div>
                </div>
            </Container>
            <section className='flex flex-col justify-center items-center text-white font-light font-roboto rtl:font-cairo gap-7 border-t border-white pt-8 my-5'>
                <span>{settings['copyright_title']}</span>
                <span>{settings['copyright_description']}</span>
            </section>
        </footer>
    )
}

export default Footer;