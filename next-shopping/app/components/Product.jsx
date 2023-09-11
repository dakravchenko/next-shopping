'use client'
import { useState } from 'react'
import Image from 'next/image'
import AddToCart from './AddToCart';

export default function Product({product}) {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
      <div 
      className='product-card'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <div className="image-wrapper">
          <Image src={product.image} alt={product.title} height={160} width={160}/>
          {isHovered && <AddToCart productId={product.id} />}
        </div>
        <h2>{product.title}</h2>
        <p>${product.price}</p>
      </div>
  )
}
