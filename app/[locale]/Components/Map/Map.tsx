import React from 'react';
import Data from "@/Data/data";

interface propTypes {
    className?: string;
}

const Map: React.FC<propTypes> = ({className}) => {

    return <iframe
        src={Data.companyMapsLocation}
        loading="lazy"
        className={`border-0 w-full ${className}`}
        referrerPolicy="no-referrer-when-downgrade">
    </iframe>
}

export default Map;