'use client'
import Link from 'next/link';
import { useProductContext } from '../contexts/ProductContext';

const FilteredProducts = () => {
  const { filteredProducts, setSearchText } = useProductContext();

  return (
    <div className="filtered-products">
      {filteredProducts.length > 0 ? (
        <div
          className="absolute mt-2 border border-gray-300 bg-white rounded-md shadow-lg p-2"
          style={{
            zIndex: 999,
            left: 0,
            right: 0, 
          }}
        >
          <ul>
            {filteredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <li
                className="flex justify-between items-center py-1 px-2 hover:bg-gray-100"
              >
                <span className="text-gray-800">{product.title}</span>
                <span className="text-green-500">${product.price}</span>
              </li>
            </Link>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FilteredProducts;
