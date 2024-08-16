import React from 'react';
import {CiLocationOn} from "react-icons/ci";
import {LuPhone} from "react-icons/lu";
import {MdOutlineEmail, MdOutlineFax} from "react-icons/md";
import {useTranslations} from "next-intl";
import AppWrite from "@/helpers/appwrite.helper";

interface propTypes {
    locale : 'en' | 'ar'
}

const ContactInfo: React.FC<propTypes> = async ({locale}) => {
    const lang = useTranslations('contactPage');
    let contactUs : any = await AppWrite.readData('contact_us').catch(() => contactUs = {});

    return <div
        className='flex flex-col justify-between items-center gap-6 w-full h-full lg:w-6/12 rounded-t-lg lg:rounded-t-none lg:ltr:rounded-l-lg lg:rtl:rounded-r-lg'>
        <h1 className='border-b-2 pb-2 border-amber-500'>{lang('contact_us')}</h1>
        <div
            className='flex justify-center items-center gap-5 border-2 border-gray-400 transition-all w-8/12 duration-300 ease-in-out p-5 rounded-lg hover:border-amber-500 hover:text-amber-500'>
            <CiLocationOn size={30}/>{contactUs['address_'+locale]}
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