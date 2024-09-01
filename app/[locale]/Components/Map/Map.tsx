import React from 'react';
import config from '@/helpers/config.helper';

interface propTypes {
    className?: string;
    locale: 'en' | 'ar';
}

async function getData(locale: 'en' | 'ar'){
    const response = await fetch(`${config.AppUrl}/client/data/getData`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': locale,
        },
        body: JSON.stringify({
            "group": "contact_us"
        }),
        next:{ revalidate: config.Revalidate }
    });

    return response.json();
}

const Map: React.FC<propTypes> = async ({className, locale}) => {

    let contactUs : any = await getData(locale);

    return <iframe
        src={contactUs?.location}
        loading="lazy"
        className={`border-0 w-full ${className}`}
        referrerPolicy="no-referrer-when-downgrade">
    </iframe>
}

export default Map;