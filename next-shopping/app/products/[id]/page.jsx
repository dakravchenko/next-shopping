import AddToCart from "@/app/components/AddToCart";
import Image from "next/image";
import Error from "@/app/components/ErrorComponent";

export const dynamicParams = false;

export async function generateStaticParams() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

async function getProductById(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: {
      revalidate: 60 * 60 * 12,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch product data');
  }

  return await res.json();
}

export default async function ProductCard({ params }) {
  try {
    const isProductCard = true;
    const product = await getProductById(params.id);

    return (
      <main className="flex flex-col md:flex-row p-4 space-x-4">
        <div className="md:flex-shrink-0">
          <Image src={product.image} alt={product.title} width={500} height={500} />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
          <AddToCart product={product} isProductCard={isProductCard} />
          <p className="mt-4">{product.description}</p>
        </div>
      </main>
    );
  } catch (error) {
    return <Error error={error.message}/>;
  }
}