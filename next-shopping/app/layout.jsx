import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { CartProvider } from './contexts/CartContext'
import { ProductProvider } from './contexts/ProductsContext'
import FilteredProducts from './components/FilteredProducts'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next-shopping',
  description: 'Most affordable shop ever',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProductProvider>
        <CartProvider>
          <Navbar/> 
          <FilteredProducts/>
          {children}
        </CartProvider>
        </ProductProvider>
      </body>
    </html>
  )
}
