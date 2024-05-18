'use client'
import React, {useEffect, useState} from 'react';
import Container from '@/app/Components/Layout/Container';
import NavLink from "@/app/Components/Layout/Nav/Components/NavLink";
import { FaBars } from "react-icons/fa";
import Image from 'next/image';
import Link from "next/link";

interface propTypes {}

const Nav: React.FC<propTypes> = () => {

    const [navState, setNavState] = useState<string>('');
    const [showMenu, setShowMenu] = useState<boolean>(false);

    // navbar height controls the height of the navbar in all phases using tailwind units


    useEffect(() => {
        // handel scroll event animation using useState and native event listener
        document.addEventListener('scroll', () => {
           if (window.scrollY >= 150 && window.scrollY < 400){
               setNavState(`fixed -top-20 w-full opacity-0`);
           }else if(window.scrollY >= 400){
               setNavState('fixed top-0 opacity-1 w-full');
           }
           else{
               setNavState('');
           }
        })
        // trigger a scroll event for when the page is reloaded or navigated not from the beginning
        window.scrollTo(window.scrollX, window.scrollY - 1);
        window.scrollTo(window.scrollX, window.scrollY + 1);
    }, []);

    return (
        <nav className={`h-20`}>
            <div className={`h-20 transition-all bg-zinc-800 text-white flex justify-center duration-500 ease-in-out ${navState}`}>
                  <Container className='flex justify-between items-center'>
                   <Image src='/assets/images/ctihc_logo.png' alt='ctihc_logo' height={75} width={75} />
                   <div className={`fixed transition-all duration-500 ease-in-out top-20 w-full text-black bg-white flex justify-between items-center flex-col lg:transition-none lg:w-auto lg:flex-row gap-7 lg:bg-transparent h-full lg:text-white lg:mt-0 lg:static ${showMenu ? 'right-0' : '-right-full' }`}>
                          <NavLink onClick={() => setShowMenu(false)} text="Home"/>
                          <NavLink onClick={() => setShowMenu(false)} text="About"/>
                          <NavLink onClick={() => setShowMenu(false)} text="Contact"/>
                          <div className='group relative h-full border-b-2 border-transparent flex items-center'>
                              DropDown
                              <div className="invisible text-nowrap bg-white drop-shadow-lg rounded transition-all  duration-200 ease-in-out absolute mt-3 z-10 top-full w-auto py-2 text-black pl-5 pr-2 flex flex-col items-end gap-2 right-0 opacity-0 group-hover:visible group-hover:mt-1 group-hover:opacity-100">
                                  <Link href="https://www.google.com">
                                      Home of the chosen
                                  </Link>
                                  <Link href="#" className=''>
                                      About 1
                                  </Link>
                                  <Link href="#" className=''>
                                      About 2
                                  </Link>
                                  <Link href="#" className=''>
                                      About 3
                                  </Link>
                                  <Link href="#" className=''>
                                      About 4
                                  </Link>
                                  <Link href="#" className=''>
                                      About 5
                                  </Link>
                              </div>
                          </div>
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