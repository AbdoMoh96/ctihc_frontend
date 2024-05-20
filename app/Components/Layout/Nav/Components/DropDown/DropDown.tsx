import React,{useState, ReactElement} from 'react';
import DropDownLink from "@/app/Components/Layout/Nav/Components/DropDownLink";

interface propTypes {
    title: string;
    children: ReactElement<typeof DropDownLink> | ReactElement<typeof DropDownLink>[];
}

const DropDown : React.FC<propTypes> = ({children, title}) => {

    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    return <div
        className='group relative w-full lg:w-auto lg:h-full border-b-2 border-transparent flex flex-col lg:flex-row items-center'
        onClick={() => setShowDropDown(state => !state)}>
        {title}
        <div
            className={`lg:invisible bg-zinc-800 text-white text-nowrap ${showDropDown ? 'max-h-96' : 'max-h-0'} lg:max-h-max overflow-hidden w-full lg:drop-shadow-lg lg:rounded transition-all duration-700 lg:duration-200 ease-in-out lg:absolute mt-3 z-10 top-full lg:w-auto lg:py-2 text-black pl-5 pr-2 flex flex-col items-end gap-2 right-0 lg:opacity-0 group-hover:visible lg:group-hover:mt-1 group-hover:opacity-100`}>
            {children}
        </div>
    </div>
}

export default DropDown;