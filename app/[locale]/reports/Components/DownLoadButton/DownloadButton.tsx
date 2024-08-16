'use client'
import React from 'react';
import AppWrite from '@/helpers/appwrite.helper';


interface PropTypes {}

const DownloadButton : React.FC<PropTypes> = () => {

    const download = async () => {
        try {
            const result = await AppWrite.downloadFile('documents', '6678189b003c260dcdee');
            if (result) {
                const url = window.URL.createObjectURL(result);
                const a = document.createElement('a');
                a.href = url;
                a.download = '2020_Report.pdf'; // Change the file name and extension accordingly
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
            }
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    }

    return <button
    className='font-roboto transition-all ease-in-out duration-300 border border-black rounded-full py-1 px-2 hover:bg-zinc-800 hover:text-white' onClick={() => download()}>
       Download 2020 Report
 </button>
}

export default DownloadButton;