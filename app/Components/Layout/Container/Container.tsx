import React from 'react';

interface propTypes {
    children: React.ReactNode;
    className?: string;
}

const Container : React.FC<propTypes> = ({children, className= ''}) => {


    return <div className={`container mx-auto px-3 ${className}`}>
        {children}
    </div>
}

export default Container;