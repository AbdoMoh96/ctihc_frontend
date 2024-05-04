'use client'
import React, {useEffect, useState} from 'react';

interface propTypes {}

const Nav: React.FC<propTypes> = () => {

    const [navState, setNaveState] = useState<string>('');

    useEffect(() => {
        document.addEventListener('scroll', () => {
           if (window.scrollY >= 5){
               setNaveState('bg-red-600');
           }else{
               setNaveState('');
           }
        })
    }, []);

    return (
        <nav className="bg-blue-500 h-20">
            <div className={`h-20 ${navState}`}>

            </div>
        </nav>
    )
}

export default Nav;