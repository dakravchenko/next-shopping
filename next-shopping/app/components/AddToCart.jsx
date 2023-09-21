'use client'
import React from 'react';
import { useCart } from '../contexts/CartContext';

export default function AddToCart({ product, isProductCard }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const style = isProductCard
    ? 'bg-gray-400 hover:bg-gray-500 focus:bg-gray-700 text-white font-bold py-2 px-4 rounded transition'
    : 'absolute top-72 left-20 bg-gray-400 hover:bg-gray-500 focus:bg-gray-700 text-white font-bold py-2 px-4 rounded transition';

  return (
    <button className={style} onClick={handleAddToCart}>
      Add to cart
    </button>
  );
}