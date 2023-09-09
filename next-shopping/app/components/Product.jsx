import Image from 'next/image'

export default function Product({product}) {
  return (
      <div className='product-card'>
        <div className="image-wrapper">
          <Image src={product.image} alt={product.title} height={160} width={160}/>
        </div>
        <h2>{product.title}</h2>
        <p>${product.price}</p>
      </div>
  )
}
