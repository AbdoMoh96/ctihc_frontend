import React,{useState, ReactElement} from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import DropDownLink from "@/app/[locale]/Components/Layout/Nav/Components/DropDownLink";

interface propTypes {
    title: string;
    children: ReactElement<typeof DropDownLink> | ReactElement<typeof DropDownLink>[];
}

const DropDown : React.FC<propTypes> = ({children, title}) => {

    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    return <div
        className='group relative w-full lg:w-auto lg:h-full border-transparent flex flex-col lg:flex-row items-center'
        onClick={() => setShowDropDown(state => !state)}>
        <span className="transition-all flex justify-center items-center mx-auto lg:mx-0 lg:h-full duration-500 ease-in-out pb-1 text-center lg:pb-0 border-b-transparent lg:border-b-2 w-11/12 lg:w-auto border-gray-100 lg:border-transparent hover:border-amber-500 lg:flex lg:items-center hover:text-amber-500">
            {title}
            <AiFillCaretDown className={`ml-1 transition-all duration-500 group-hover:text-amber-500 ease-in-out group-hover:lg:rotate-180 ${showDropDown ? 'rotate-180' : ''}`} />
        </span>
        <div
            className={`lg:invisible bg-zinc-800 text-white text-nowrap ${showDropDown ? 'max-h-96' : 'max-h-0'} lg:max-h-max overflow-hidden w-full lg:drop-shadow-lg lg:rounded transition-all duration-700 lg:duration-200 ease-in-out lg:absolute mt-3 z-10 top-full lg:w-auto lg:py-2 text-black pl-5 pr-2 flex flex-col items-end gap-2 right-0 lg:opacity-0 group-hover:visible lg:group-hover:mt-1 group-hover:opacity-100`}>
            {children}
        </div>
    </div>
}

export default DropDown;