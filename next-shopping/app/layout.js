import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { CartProvider } from './contexts/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next-shopping',
  description: 'Most affordable shop ever',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/> 
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
