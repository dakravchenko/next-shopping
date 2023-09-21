'use client'
import React, { useState, useEffect } from 'react';
import { useProductContext } from '../contexts/ProductsContext';

const SearchField = () => {
  const { searchProducts, searchText, setSearchText} = useProductContext();

  useEffect(() => {

    const delayTimer = setTimeout(() => {
      searchProducts(searchText);
    }, 500);

    return () => clearTimeout(delayTimer);
  }, [searchText, searchProducts]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        className="border rounded py-2 px-4"
        placeholder="Type text to find"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchField;
