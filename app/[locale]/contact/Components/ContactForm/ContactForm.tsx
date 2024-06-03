'use client'
import React from 'react';
import { Input } from 'antd';
import {useTranslations} from "next-intl";
const { TextArea } = Input;

interface propTypes {}

const ContactForm : React.FC<propTypes> = () => {

    const lang = useTranslations('contactPage');

    return <div
        className='flex flex-col justify-center items-center gap-6 w-full h-full lg:w-6/12 rounded-t-lg lg:rounded-t-none lg:ltr:rounded-l-lg lg:rtl:rounded-r-lg'>
        <div className='w-11/12'>
            <label className='block mb-1'>{lang('full_name')}</label>
            <Input className='w-full' placeholder={lang('full_name')}/>
        </div>
        <div className='w-11/12'>
            <label className='block mb-1'>{lang('phone')}</label>
            <Input className='w-full' placeholder={lang('phone')}/>
        </div>
        <div className='w-11/12'>
            <label className='block mb-1'>{lang('email')}</label>
            <Input className='w-full' placeholder={lang('email')}/>
        </div>
        <div className='w-11/12'>
            <label className='block mb-1'>{lang('subject')}</label>
            <Input className='w-full' placeholder={lang('subject')}/>
        </div>
        <div className='w-11/12'>
            <label className='block mb-1'>{lang('message')}</label>
            <TextArea className='w-full' placeholder={lang('message')} rows={4}/>
        </div>
        <div className="w-11/12">
            <button
                className='font-roboto rtl:font-cairo w-full transition-all ease-in-out duration-300 border border-black rounded-full py-1 px-2 hover:bg-zinc-800 hover:text-white'>
                {lang('contact_button')}
            </button>
        </div>
    </div>
}

export default ContactForm;