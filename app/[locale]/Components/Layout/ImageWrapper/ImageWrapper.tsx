import React from 'react';
import Image from "next/image";

// this component best used with tailwind

interface propTypes {
    className: string;
    imageClass?: string;
    src: string;
    alt: string;
}

const ImageWrapper: React.FC<propTypes> = ({className,imageClass, src,alt}) => {

  return (<div className={`relative ${className}`}>
    <Image src={src} alt={alt} className={imageClass} fill/>
  </div>)
}


export default ImageWrapper;