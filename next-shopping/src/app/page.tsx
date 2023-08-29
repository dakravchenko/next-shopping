import Image from 'next/image'
import RootLayout from './layout'
import Header from '@/components/header'

export default function Home({categories}) {

  type Categories = {
  id: string,
  name: string,
  image: string
}
async function getAllCategories() {
  const res = await fetch('https://api.escuelajs.co/api/v1/categories');
  console.log(res)
  return res.json();

}
async function getStaticProps() {
  const categories : Categories[] = await getAllCategories()
  return {
      props: {
        categories,
      },
    };
}
  return (
    <RootLayout>
    <main>
      <Header categories={categories}/>
    </main>
    </RootLayout>
  )
}
