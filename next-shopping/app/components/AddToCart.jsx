'use client'
import React from 'react'
import { useCart } from '../contexts/CartContext'

export default function AddToCart({product, isProductCard}) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);

  };

  const style = isProductCard
  ? "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
  : "absolute top-72 left-20 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded";

  return (
    <button className={style} onClick={handleAddToCart}>
      Add to cart
    </button>
  )
}
