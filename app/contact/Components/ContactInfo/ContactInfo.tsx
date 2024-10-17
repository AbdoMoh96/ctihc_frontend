import React from 'react';
import {CiLocationOn} from "react-icons/ci";
import config from '@/helpers/config.helper';
import {LuPhone} from "react-icons/lu";
import {MdOutlineEmail, MdOutlineFax} from "react-icons/md";

interface propTypes {
    locale : 'en' | 'ar'
}

async function getData(locale: 'en' | 'ar'){
    const response = await fetch(`${config.AppUrl}/client/data/getData`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': locale,
        },
        body: JSON.stringify({
            "group": "contact_us"
        }),
        next:{ revalidate: config.Revalidate }
    });

    return response.json();
}

const ContactInfo: React.FC<propTypes> = async ({locale}) => {
    let contactUs : any = await getData(locale);

    return <div
        className='flex flex-col justify-between items-center gap-6 w-full h-full lg:w-6/12 rounded-t-lg lg:rounded-t-none lg:ltr:rounded-l-lg lg:rtl:rounded-r-lg'>
        <h1 className='border-b-2 pb-2 border-amber-500'>__translate_contact_us_page_title</h1>
        <div
            className='flex justify-center items-center gap-5 border-2 border-gray-400 transition-all w-8/12 duration-300 ease-in-out p-5 rounded-lg hover:border-amber-500 hover:text-amber-500'>
            <CiLocationOn size={30}/>{contactUs['address']}
        </div>
        <div
            className='flex justify-center items-center gap-5 border-2 border-gray-400 transition-all w-8/12 duration-300 ease-in-out p-5 rounded-lg hover:border-amber-500 hover:text-amber-500'>
            <LuPhone size={30}/> {contactUs?.phone}
        </div>
        {contactUs?.fax?.length > 0 &&
         <div
             className='flex justify-center items-center gap-5 border-2 border-gray-400 transition-all w-8/12 duration-300 ease-in-out p-5 rounded-lg hover:border-amber-500 hover:text-amber-500'>
             <MdOutlineFax size={30}/> {contactUs?.fax}
         </div>
        }
        <div
            className='flex justify-center items-center gap-5 border-2 border-gray-400 transition-all w-8/12 duration-300 ease-in-out p-5 rounded-lg hover:border-amber-500 hover:text-amber-500'>
            <MdOutlineEmail size={30}/> {contactUs?.email}
        </div>
    </div>
}

export default ContactInfo;