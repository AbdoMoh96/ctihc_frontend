'use client'
import React, {useEffect, useState} from 'react';
import Container from '@/app/[locale]/Components/Layout/Container';
import NavLink from "@/app/[locale]/Components/Layout/Nav/Components/NavLink";
import config from '@/helpers/config.helper';
import { FaBars } from "react-icons/fa";
import { useParams } from 'next/navigation';
import Image from 'next/image';
/*import DropDown from "@/app/[locale]/Components/Layout/Nav/Components/DropDown";
import DropDownLink from "@/app/[locale]/Components/Layout/Nav/Components/DropDownLink";*/
import {useTranslations} from 'next-intl';

interface propTypes {}

const Nav: React.FC<propTypes> = () => {

    const [navState, setNavState] = useState<string>('');
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [data, setData] = useState<any>();
    const {locale} = useParams<{ locale: "en" | "ar"}>();
    const lang = useTranslations('Index')('lang');
    const local = useTranslations('nav');


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

        fetch(`${config.AppUrl}/client/data/getData`,{
            method: 'POST',
            headers: {
             'Content-Type': 'application/json',
             'Accept-Language' : locale
            },
            body: JSON.stringify({
                "group" : "settings",
            })
        }).then(response => response.json())
          .then(data => setData(data));

    }, [locale]);

    useEffect(() => {
        if(showMenu){
           document.querySelector('body')?.classList.add('stop-scrolling');
        }else{
            document.querySelector('body')?.classList.remove('stop-scrolling');
        }
    },[showMenu])

    return (
        <nav className={`h-20`}>
            <div className={`h-20 font-roboto rtl:font-cairo transition-all bg-zinc-800 text-white flex justify-center duration-500 ease-in-out ${navState}`}>
                  <Container className='flex justify-between items-center'>
                   <Image src={config.AppStorage+'/'+data?.ctihc_logo} alt='ctihc_logo' height={75} width={75} />
                   <div className={`fixed transition-all duration-500 ease-in-out top-20 z-500 w-full text-white bg-zinc-800 flex pt-4 lg:pt-0 gap-6 flex-col justify-start items-center lg:justify-between lg:transition-none lg:w-auto lg:flex-row lg:gap-7 lg:bg-transparent h-full lg:text-white lg:mt-0 lg:static ${showMenu ? 'right-0' : '-right-full' }`}>
                          <NavLink href='/' replace={true} onClick={() => setShowMenu(false)} text={local('home')}/>
                          <NavLink href='/about' replace={true} onClick={() => setShowMenu(false)} text={local('about_us')}/>
                          <NavLink href='/reports' replace={true} onClick={() => setShowMenu(false)} text={local('reports')}/>
                          <NavLink href='/group-structure' replace={true} onClick={() => setShowMenu(false)} text={local('group_structure')}/>
                          <NavLink href='/news' replace={true} onClick={() => setShowMenu(false)} text={local('news')}/>
                          <NavLink href='/partners' replace={true} onClick={() => setShowMenu(false)} text={local('partners')}/>
                          <NavLink href='/contact' replace={true} onClick={() => setShowMenu(false)} text={local('contact_us')}/>
                       {lang == 'en' &&
                           <NavLink href="/ar" onClick={() => setShowMenu(false)} text="العربية"/>
                       }

                       {lang == 'ar' &&
                           <NavLink href="/en" onClick={() => setShowMenu(false)} text="English"/>
                       }
                        {/*<DropDown title='dropdown_title_here'>
                            <DropDownLink text='sublink_1'/>
                            <DropDownLink text='sublink_2'/>
                        </DropDown>*/}
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