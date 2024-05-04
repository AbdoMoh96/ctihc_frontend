'use client'
import React, {useEffect, useState} from 'react';

interface propTypes {}

const Nav: React.FC<propTypes> = () => {

    const [navState, setNaveState] = useState<string>('');

    useEffect(() => {
        document.addEventListener('scroll', () => {
           if (window.scrollY >= 150 && window.scrollY < 200){
               setNaveState('-top-20 opacity-0');
           }else if(window.scrollY >= 200){
               setNaveState('fixed top-0 opacity-1 bg-red-600 w-screen');
           }
           else{
               setNaveState('');
           }
        })
    }, []);

    return (
        <nav className="h-20">
            <div className={`h-20 transition-all duration-500 ease-in-out bg-red-600 ${navState}`}>
              
            </div>
        </nav>
    )
}

export default Nav;