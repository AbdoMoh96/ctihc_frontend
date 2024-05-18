import React from 'react';
import Link from "next/link";

interface propTypes {
    className? :string;
    text : string;
    href? : string;
    onClick? : () => void;
}

const NavLink : React.FC<propTypes> = ({text, href = '#', className = '', onClick}) => {

    return <Link onClick={onClick} href={href} className={`lg:h-full border-b-2 transition-all duration-500 ease-in-out border-transparent hover:border-amber-500 flex items-center hover:text-amber-500 ${className}`}>
        {text}
    </Link>
}

export default NavLink;