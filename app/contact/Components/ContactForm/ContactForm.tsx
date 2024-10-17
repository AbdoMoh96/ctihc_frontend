'use client'
import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

interface propTypes {}

const ContactForm : React.FC<propTypes> = () => {

    return <div
        className='flex flex-col justify-center items-center gap-6 w-full h-full lg:w-6/12 rounded-t-lg lg:rounded-t-none lg:ltr:rounded-l-lg lg:rtl:rounded-r-lg'>
        <div className='w-11/12'>
            <label className='block mb-1'>translate_fullname_input</label>
            <Input className='w-full' placeholder="translate_fullname_input"/>
        </div>
        <div className='w-11/12'>
            <label className='block mb-1'>_translate_phone</label>
            <Input className='w-full' placeholder="_translate_phone"/>
        </div>
        <div className='w-11/12'>
            <label className='block mb-1'>__translate_email</label>
            <Input className='w-full' placeholder="__translate_email"/>
        </div>
        <div className='w-11/12'>
            <label className='block mb-1'>__translate_subject</label>
            <Input className='w-full' placeholder="__translate_subject"/>
        </div>
        <div className='w-11/12'>
            <label className='block mb-1'>__translate_message</label>
            <TextArea className='w-full' placeholder="__translate_message" rows={4}/>
        </div>
        <div className="w-11/12">
            <button
                className='font-roboto rtl:font-cairo w-full transition-all ease-in-out duration-300 border border-black rounded-full py-1 px-2 hover:bg-zinc-800 hover:text-white'>
                __translate_contact_button
            </button>
        </div>
    </div>
}

export default ContactForm;