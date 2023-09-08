import Link from "next/link";
import Product from "./Product";

export default function Products({products}) {
  return (
    <>
      {products.map((product) => (
        <Link key={product.id} href={`products/${product.id}`}>
          <Product product={product}/>
        </Link>
      ))}
    </>
  )
}
