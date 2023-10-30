import Products from "./components/Products"
import Error from "./components/ErrorComponent";

async function getAllProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return await res.json();
}

export default async function Home() {
  try {
    const products = await getAllProducts();
    return (
      <>
        <main>
          <Products products={products} />
        </main>
      </>
    );
  } catch (error) {
    return <Error error={error.message} />;
  }
}
