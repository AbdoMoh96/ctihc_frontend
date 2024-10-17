import React, {ReactNode} from 'react';
import Link from "next/link";

interface propTypes {
    className? :string;
    text? : string;
    href? : string;
    children?: ReactNode;
    onClick? : () => void;
}

const DropDownLink : React.FC<propTypes> = ({text, href = '#', className = '', onClick, children}) => {

    return <Link onClick={onClick} href={href} className={`transition-all duration-300 ease-in-out hover:text-amber-500 border-b-transparent w-11/12 lg:w-full mx-auto text-center pb-1 lg:pb-0 lg:text-right lg:border-0 border-gray-100 ${className}`}>
                {text ?? children}
           </Link>

}

export default DropDownLink;