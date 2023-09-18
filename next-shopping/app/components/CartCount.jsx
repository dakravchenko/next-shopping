'use client'
import { useCart } from "../contexts/CartContext";

export default function CartCount() {
  const { cartItemCount } = useCart();

  return (
    <>
      {cartItemCount > 0 && (
        <span className="ml-1">{cartItemCount}</span>
      )}
    </>
  );
}