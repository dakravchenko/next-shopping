'use client'
import React from 'react'
import { useCart } from '../contexts/CartContext'

export default function AddToCart({product}) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);

  };
  return (
    <button className='add-to-cart-btn' onClick={handleAddToCart}>
      Add to cart
    </button>
  )
}
