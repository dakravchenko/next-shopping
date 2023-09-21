'use client'
import { useState, useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import Image from 'next/image';
import { RxCross1 } from 'react-icons/rx';
import Link from 'next/link';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const calculateTotal = () => {
      const totalPrice = cart.reduce((total, product) => total + product.price, 0);
      setTotalPrice(totalPrice);
    };

    calculateTotal();
  }, [cart]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((product) => (
              <li key={product.cartItemId} className="flex items-center justify-between mb-2">
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
                  onClick={() => removeFromCart(product.cartItemId)}
                  className="px-2 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                >
                  <RxCross1 size={24} />
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <p className="text-lg font-semibold">Total: ${totalPrice}</p>
          </div>
        </>
      )}

      <div className="mt-4">
        <Link href="cart/confirmation">
        <button
          onClick={clearCart}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          Proceed
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;