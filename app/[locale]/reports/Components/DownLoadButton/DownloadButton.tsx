'use client'
import React from 'react';
import downloadFile from '@/helpers/download.helper';
import {useTranslations} from 'next-intl';


interface PropTypes {
    fileName: string;
    fileUrl: string;
}

const DownloadButton : React.FC<PropTypes> = ({fileName, fileUrl}) => {

    const trans = useTranslations('reportsPage');

    const handelDownloadFile = () => {
        downloadFile(fileName, fileUrl);
    }


    return <button
    onClick={() => handelDownloadFile()}
    className='font-roboto transition-all ease-in-out duration-300 border border-black rounded-full py-1 px-2 hover:bg-zinc-800 hover:text-white'>
       {trans('download')} {fileName}
 </button>
}

export default DownloadButton;