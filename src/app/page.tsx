import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import ButtonR from '@/components/ButtonR'
import Images from '@/components/Images'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Images/>
      <ButtonR/>


    </main>
  )
}
