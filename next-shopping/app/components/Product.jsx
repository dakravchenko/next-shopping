'use client'
import { useState } from 'react'
import Image from 'next/image'
import AddToCart from './AddToCart';
import Link from 'next/link';

export default function Product({product}) {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className='relative'
    onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
     <Link href={`products/${product.id}`}>
      <div 
      className='product-card'>
        <div className="image-wrapper">
          <Image src={product.image} alt={product.title} height={160} width={160}/>
        </div>
        <h2>{product.title}</h2>
        <p>${product.price}</p>
      </div>
      </Link>
      {isHovered && <AddToCart product={product} />}
    </div>
  )
}
