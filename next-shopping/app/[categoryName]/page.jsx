import Products from "../components/Products"

export async function generateStaticParams(){
    const res = await fetch('https://fakestoreapi.com/products/categories')

    const categories = await res.json()
    return categories.map((category)=> ({
      categoryName: encodeURIComponent(category),
    }))
}

async function getProductsByCategoryName(categoryName){
    const res = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
  
    return await res.json()
    
  }

export default async  function productsByCategory({params}) {
    const products = await getProductsByCategoryName(params.categoryName)
  return (
    <main>
        <h1 className="category-name">{decodeURIComponent(params.categoryName).toUpperCase()}</h1>
      <Products products={products}/>
    </main>
  )
}
