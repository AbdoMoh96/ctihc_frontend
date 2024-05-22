import React from 'react';
import Container from "@/app/Components/Layout/Container";
import Image from 'next/image';


interface propTypes {}

const Footer: React.FC<propTypes> = () => {

    return (
        <footer className="py-2 mt-28 bg-zinc-800">
            <Container className='gap-7 lg:gap-5 flex flex-col justify-center items-center'>
                <div className='w-full py-2 grid grid-cols-1 lg:grid-cols-4 gap-10'>
                    <div className='py-2 flex flex-col gap-2'>
                        <div className='flex flex-row items-center gap-2'>
                            <Image src='/assets/images/ctihc_logo.png' alt='ctihc_logo' height={100} width={80}/>
                            <h1 className='text-white font-roboto font-semibold capitalize'>cotton & textile industries
                                holding</h1>

                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <Image src='/assets/images/ctihc_second_logo.png' className='rounded-lg' alt='ctihc_logo' height={100} width={80}/>
                            <h1 className='text-white font-roboto font-semibold capitalize'>Ministry of Public Business Sector</h1>

                        </div>
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