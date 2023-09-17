import Products from "./components/Products"

async function getAllProducts(){
  await new Promise(resolve => setTimeout(resolve, 3000))
  const res = await fetch('https://fakestoreapi.com/products')

  return await res.json()
  
}

export default async function Home() {

  const products = await getAllProducts()
  return (
    <main>
      <Products products={products}/>
    </main>
  )
}
