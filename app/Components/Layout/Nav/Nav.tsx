'use client'
import React, {useEffect, useState} from 'react';
import Container from '@/app/Components/Layout/Container';
import NavLink from "@/app/Components/Layout/Nav/Components/NavLink";
import { FaBars } from "react-icons/fa";
import Image from 'next/image';
import DropDown from "@/app/Components/Layout/Nav/Components/DropDown";
import DropDownLink from "@/app/Components/Layout/Nav/Components/DropDownLink";

interface propTypes {}

const Nav: React.FC<propTypes> = () => {

    const [navState, setNavState] = useState<string>('');
    const [showMenu, setShowMenu] = useState<boolean>(false);


    useEffect(() => {
        // handel scroll event animation using useState and native event listener
        document.addEventListener('scroll', () => {
           if (window.scrollY >= 150 && window.scrollY < 400){
               setNavState(`fixed -top-20 w-full opacity-0 z-500`);
           }else if(window.scrollY >= 400){
               setNavState('fixed top-0 opacity-1 w-full z-500');
           }
           else{
               setNavState('');
           }
        })
        // trigger a scroll event for when the page is reloaded or navigated not from the beginning
        if(window.scrollY >= 400){
            window.scrollTo(window.scrollX, window.scrollY - 1);
            window.scrollTo(window.scrollX, window.scrollY + 1);
        }
    }, []);

    return (
        <nav className={`h-20`}>
            <div className={`h-20 font-roboto transition-all bg-zinc-800 text-white flex justify-center duration-500 ease-in-out ${navState}`}>
                  <Container className='flex justify-between items-center'>
                   <Image src='/assets/images/ctihc_logo.png' alt='ctihc_logo' height={75} width={75} />
                   <div className={`fixed transition-all duration-500 ease-in-out top-20 z-500 w-full text-white bg-zinc-800 flex pt-4 lg:pt-0 gap-6 flex-col justify-start items-center lg:justify-between lg:transition-none lg:w-auto lg:flex-row lg:gap-7 lg:bg-transparent h-full lg:text-white lg:mt-0 lg:static ${showMenu ? 'right-0' : '-right-full' }`}>
                          <NavLink onClick={() => setShowMenu(false)} text="Home"/>
                          <NavLink onClick={() => setShowMenu(false)} text="About"/>
                          <NavLink onClick={() => setShowMenu(false)} text="Contact"/>
                        <DropDown title='test'>
                            <DropDownLink href="https://www.google.com" text='Home of the chosen'/>
                            <DropDownLink text='About 1'/>
                            <DropDownLink text='About 2'/>
                            <DropDownLink text='About 3'/>
                            <DropDownLink text='About 4'/>
                            <DropDownLink text='About 5'/>
                            <DropDownLink text='About 6'/>
                        </DropDown>
                   </div>
                   <div className='flex justify-center align-middle lg:hidden'>
                       <FaBars size={22} onClick={() => setShowMenu(state => !state)} />
                   </div>
                  </Container>
            </div>
        </nav>
    )
}

export default Nav;