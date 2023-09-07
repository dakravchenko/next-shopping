import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="upper">
      </div>
      <div className="categories">
        <ul>
            <li><Link href="/categories/electronics">Electronics</Link></li>
            <li><Link href="/categories/jewelery">Jewelery</Link></li>
            <li><Link href="/categories/mens">Furniture</Link></li>
            <li><Link href="/categories/womens">Shoes</Link></li>
            <li><Link href="/">All</Link></li>
        </ul>
      </div>
    </nav>
  )
}
