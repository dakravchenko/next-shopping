import Loading from "@/app/loading";
import Products from "../../components/Products";
import { Suspense } from "react";

export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await res.json();

  return categories.map((category) => ({
    categoryName: category.replace(/ /g, "%20"),
  }));
}

async function getProductsByCategoryName(categoryName) {
  const res = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`);

  return await res.json();
}

export default async function productsByCategory({ params }) {
  const categoryName = params.categoryName.replace(/%20/g, " ");
  const products = await getProductsByCategoryName(categoryName);

  return (
    <main>
      <h1 className="category-name">{categoryName.toUpperCase()}</h1>
      <Suspense fallback={<Loading />}>
        <Products products={products} />
      </Suspense>
    </main>
  );
}