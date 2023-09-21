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
      <div className="flex justify-between items-center px-4 py-2">
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
              <li className="capitalize">{category.toUpperCase()}</li>
            </Link>
          ))}
            <Link href="/"><li className="capitalize">ALL</li></Link>
        </ul>
      </div>
    </nav>
  )
}
