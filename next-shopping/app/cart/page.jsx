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
    <div className="cart-wrapper">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((product) => (
              <li key={product.cartItemId}>
                <div className="cart-item">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={40}
                    height={40}
                  />
                  <div className="cart-item-info">
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(product.cartItemId)}
                  className="remove-btn"
                >
                  <RxCross1 size={24} />
                </button>
              </li>
            ))}
          </ul>

          <div className="total-price-container">
            <p>Total: ${totalPrice}</p>
          </div>
        </>
      )}

      <div className="mt-4">
        <Link href="cart/confirmation">
        <button
          onClick={clearCart}
          className="proceed-btn"
        >
          Proceed
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;