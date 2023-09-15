'use client'
import React from 'react';
import { useCart } from '../contexts/CartContext';
import Image from 'next/image';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id} className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={40}
                  height={40}
                  className="object-cover object-center rounded"
                />
                <div className="ml-2">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4">
        <button
          onClick={clearCart}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;