'use client'
import React, { useState } from 'react';

const SearchField = () => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {

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
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSearch}
      >
        Go
      </button>
    </div>
  );
};

export default SearchField;