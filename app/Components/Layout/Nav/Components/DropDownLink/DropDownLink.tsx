import React from 'react';
import Link from "next/link";

interface propTypes {
    className? :string;
    text : string;
    href? : string;
    onClick? : () => void;
}

const DropDownLink : React.FC<propTypes> = ({text, href = '#', className = '', onClick}) => {

    return <Link onClick={onClick} href={href} className={` ${className}`}>
                {text}
           </Link>

}

export default DropDownLink;