import Link from "next/link";
import Product from "./Product";

export default function Products({products}) {
  return (
    <div className="product-wrapper">
      {products.map((product) => (
        <Link key={product.id} href={`products/${product.id}`}>
          <Product product={product}/>
        </Link>
      ))}
    </div>
  )
}
