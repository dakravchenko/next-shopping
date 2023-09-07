import Products from "./components/Products"

async function getAllProducts(){
  const res = await fetch('https://fakestoreapi.com/products')

  return await res.json()
  
}

export default async function Home() {

  const products = await getAllProducts()
  return (
    <>
      <Products products={products}/>
    </>
  )
}
