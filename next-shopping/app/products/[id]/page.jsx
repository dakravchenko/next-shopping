import Image from "next/image"
export async function generateStaticParams(){
    const res = await fetch('https://fakestoreapi.com/products')

    const products = await res.json()
    return products.map((product)=> ({
      id: toString(product.id),
    }))
}

async function getProductById(id){
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)

  return await res.json()
  
}

export default async function ProductCard({params}) {
  const product = await getProductById(params.id)
  return (
    <main>
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p>{product.description}</p>
      </div>
      <div className="product-picture-and-add-to-cart">
        <Image src={product.image} alt={product.title} width={100} height={100}/>
        <p>{product.price}</p>
        <p>Add to cart component somewhere here</p>
      </div>
    </main>
  )
}
