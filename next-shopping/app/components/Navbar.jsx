import Link from "next/link";
import SearchField from "./SearchField";

async function getAllCategories(){
  const res = await fetch('https://fakestoreapi.com/products/categories')

    return await res.json()
   
}
export default async function Navbar() {
  const categories = await getAllCategories()
  return (
    <nav>
      <div className="upper">
        <SearchField/>
      </div>
      <div>
        <ul className="categories-nav">
          {categories.map((category) => (
            <Link key={category} href={encodeURIComponent(category)}>
              <li>{category.toUpperCase()}</li>
            </Link>
          ))}
            <Link href="/"><li>ALL</li></Link>
        </ul>
      </div>
    </nav>
  )
}
