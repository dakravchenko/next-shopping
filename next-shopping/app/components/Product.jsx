import Image from 'next/image'

export default function Product({product}) {
  return (
    <div>
      {product.title}   {product.price}
      <Image src={product.image} alt={product.title} height={30} width={30}/>
    </div>
  )
}
