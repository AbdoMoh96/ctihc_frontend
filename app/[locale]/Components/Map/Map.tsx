import React from 'react';
import AppWrite from "@/helpers/appwrite.helper";

interface propTypes {
    className?: string;
}

const Map: React.FC<propTypes> = async ({className}) => {

    let contactUs : any = await AppWrite.readData('contact_us').catch(() => contactUs = {});

    return <iframe
        src={contactUs?.location}
        loading="lazy"
        className={`border-0 w-full ${className}`}
        referrerPolicy="no-referrer-when-downgrade">
    </iframe>
}

export default Map;