'use client'
import React, {useEffect, useState} from 'react';

interface propTypes {}

const Nav: React.FC<propTypes> = () => {

    const [navState, setNavState] = useState<string>('');

    useEffect(() => {
        // handel scroll event animation using useState and native event listener
        document.addEventListener('scroll', () => {
           if (window.scrollY >= 150 && window.scrollY < 200){
               setNavState('-top-20 opacity-0');
           }else if(window.scrollY >= 200){
               setNavState('fixed top-0 opacity-1 bg-blue-600 w-screen text-white');
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
        <nav className="h-20">
            <div className={`h-20 transition-all duration-500 ease-in-out flex justify-between items-center p-3 ${navState}`}>
                   <h2>Logo</h2>
                   <div>

                   </div>
            </div>
        </nav>
    )
}

export default Nav;