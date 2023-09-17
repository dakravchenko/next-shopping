import Product from "./Product";
import Head from 'next/head';

export default function Products({products}) {
  return (
    <div className="product-wrapper">
      {products.map((product) => (
          <>
            <Head>
            <title>{product.title}</title>
            </Head>
            <Product key={product.id} product={product}/>
          </>
      ))}
    </div>
  )
}
