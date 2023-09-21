import Link from 'next/link';
import React from 'react';

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-green-200 p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Thank you for your order!
        </h2>
        <p className="text-gray-700">
          Your order has been received. It may be processed sometime in the future if I ever implement a backend ;)
           For now, you can go back and place another fake order.
        </p>
        <Link href="/">
        <button className="mt-6 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
          Go Back
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;