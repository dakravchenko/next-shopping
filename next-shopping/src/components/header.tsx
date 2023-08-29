import React from 'react'

export default function Header({categories}) {
  return (
    <nav className='flex flex-col bg-gray-100'>
      <ul className='flex justify-evenly'>
        <li>logo</li>
        <li>favorites</li>
        <li>car</li>
        <li>login</li>
      </ul>
      <form className='flex justify-center'>
        <button type='button'>button</button>
        <input type='text'></input>
      </form>
      <ul className='flex justify-evenly'>
        {/* {categories.map(category => {
            <li key={category.id}>category.name</li>
        })} */}
        {/* <li>Clothes</li>
        <li>Electronics</li>
        <li>Furniture</li>
        <li>Shoes</li>
        <li>Others</li> */}
      </ul>
    </nav>
  )
}
