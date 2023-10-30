import Loading from "@/app/loading";
import Products from "../../components/Products";
import { Suspense } from "react";
import Error from "@/app/components/ErrorComponent";

export async function generateStaticParams() {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const categories = await res.json();

  return categories.map((category) => ({
    categoryName: category.replace(/ /g, '%20'),
  }));
}

async function getProductsByCategoryName(categoryName) {
  const res = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`);

  if (!res.ok) {
    throw new Error('Failed to fetch products by category');
  }

  return await res.json();
}

export default async function productsByCategory({ params }) {
  const categoryName = params.categoryName.replace(/%20/g, ' ');

  try {
    const products = await getProductsByCategoryName(categoryName);

    return (
      <main>
        <h1 className="category-name">{categoryName.toUpperCase()}</h1>
        <Suspense fallback={<Loading />}>
          <Products products={products} />
        </Suspense>
      </main>
    );
  } catch (error) {
    return <Error error={error.message} />;
  }
}