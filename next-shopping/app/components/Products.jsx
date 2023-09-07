import Product from "./Product";

export default function Products({products}) {
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} product={product}/>
      ))}
    </>
  )
}
