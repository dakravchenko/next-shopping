import Link from "next/link";
import SearchField from "./SearchField";
import { BsMinecartLoaded } from 'react-icons/bs';
import CartCount from "./CartCount";



async function getAllCategories(){
  const res = await fetch('https://fakestoreapi.com/products/categories')

    return await res.json()
   
}
export default async function Navbar() {
  const categories = await getAllCategories()
  return (
    <nav>
      <div className="flex justify-between items-center">
        <SearchField/>
        <Link href='/cart' className="ml-auto">
          <div className="flex gap-1">
            <CartCount/>
            <BsMinecartLoaded className="w-8 h-8"/>
          </div>
        </Link>
      </div>
      <div>
        <ul className="categories-nav">
          {categories.map((category) => (
            <Link key={category} href={`/category/${encodeURIComponent(category)}`}>
              <li>{category.toUpperCase()}</li>
            </Link>
          ))}
            <Link href="/"><li>ALL</li></Link>
        </ul>
      </div>
    </nav>
  )
}
