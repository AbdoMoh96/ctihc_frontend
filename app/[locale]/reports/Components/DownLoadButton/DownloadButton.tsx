'use client'
import React from 'react';


interface PropTypes {
    fileUrl: string
}

const DownloadButton : React.FC<PropTypes> = ({fileUrl}) => {

    // const download = async () => {
    //     try {
    //         const result = await AppWrite.downloadFile('documents', '6678189b003c260dcdee');
    //         if (result) {
    //             const url = window.URL.createObjectURL(result);
    //             const a = document.createElement('a');
    //             a.href = url;
    //             a.download = '2020_Report.pdf'; // Change the file name and extension accordingly
    //             document.body.appendChild(a);
    //             a.click();
    //             a.remove();
    //             window.URL.revokeObjectURL(url);
    //         }
    //     } catch (error) {
    //         console.error('Error downloading file:', error);
    //     }
    // }

    return <button
    className='font-roboto transition-all ease-in-out duration-300 border border-black rounded-full py-1 px-2 hover:bg-zinc-800 hover:text-white'>
       Download 2020 Report
 </button>
}

export default DownloadButton;