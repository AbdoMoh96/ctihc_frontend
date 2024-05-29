import React, {ReactNode} from 'react';
import Link from "next/link";
import { Link as TransLink } from '@/helpers/navigation';

interface propTypes {
    className? :string;
    text? : string;
    href? : any;
    replace? : boolean;
    children?: ReactNode;
    onClick? : () => void;
}

const NavLink : React.FC<propTypes> = ({text,children, replace = false, href = '#', className = '', onClick}) => {

    return <>
        {
          replace ? <TransLink href={href} onClick={onClick}  className={`lg:h-full transition-all inline-block mx-auto lg:mx-0 duration-500 ease-in-out pb-1 text-center lg:pb-0 border-b-transparent lg:border-b-2 w-11/12 lg:w-auto border-gray-100 lg:border-transparent hover:border-amber-500 lg:flex lg:items-center hover:text-amber-500 ${className}`}>
            {text ?? children}
        </TransLink> :
            <Link href={href} onClick={onClick}  className={`lg:h-full transition-all inline-block mx-auto lg:mx-0 duration-500 ease-in-out pb-1 text-center lg:pb-0 border-b-transparent lg:border-b-2 w-11/12 lg:w-auto border-gray-100 lg:border-transparent hover:border-amber-500 lg:flex lg:items-center hover:text-amber-500 ${className}`}>
                {text ?? children}
            </Link>
       }
    </>
}

export default NavLink;