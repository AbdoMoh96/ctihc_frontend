'use client'
import React from 'react';


interface PropTypes {
    fileName: string;
    fileUrl: string;
}

const DownloadButton : React.FC<PropTypes> = ({fileUrl}) => {



    return <button
    className='font-roboto transition-all ease-in-out duration-300 border border-black rounded-full py-1 px-2 hover:bg-zinc-800 hover:text-white'>
       Download 2020 Report
 </button>
}

export default DownloadButton;