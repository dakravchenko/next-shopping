'use client'
import { useEffect, useState } from "react";

export default function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/categories');
        const categories = await response.json();
        setCategories(categories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchCategories();
  }, []);

  return (
    <nav className='flex flex-col bg-gray-100'>
      <form className='flex justify-center'>
        <button type='button'>button</button>
        <input type='text' />
      </form>
      <ul className='flex'>
        {categories.map(category =>
          category.id <= 5 && <li key={category.id}>{category.name}</li>
        )}
      </ul>
    </nav>
  );
}