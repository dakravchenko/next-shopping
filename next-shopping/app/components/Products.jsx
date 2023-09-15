import Link from "next/link";
import Product from "./Product";

export default function Products({products}) {
  return (
    <div className="product-wrapper">
      {products.map((product) => (
          <Product key={product.id} product={product}/>
      ))}
    </div>
  )
}
