import React from 'react';
import Container from "@/app/Components/Layout/Container";
import Image from 'next/image';


interface propTypes {}

const Footer: React.FC<propTypes> = () => {

    return (
        <footer className="py-2 mt-28 bg-zinc-800">
            <Container className='gap-7 lg:gap-5 flex flex-col justify-center items-center'>
                <div className='w-full py-2 grid grid-cols-1 lg:grid-cols-4 gap-10'>
                    <div className='py-2 flex  justify-center items-center gap-2'>
                        <Image src='/assets/images/ctihc_logo.png' alt='ctihc_logo' height={100} width={100}/>
                        <h1 className='text-white font-roboto font-semibold capitalize'>cotton & textile industries holding</h1>
                    </div>
                    <div className='py-2'></div>
                    <div className='py-2'></div>
                    <div className='py-2'></div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;