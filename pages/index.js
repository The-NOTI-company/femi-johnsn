import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/pages/Home.module.scss'
import { homepageImages } from '../utils/constants'
import ImageSlider from '../components/image-slider'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Femi Johnsn</title>
        <meta name="description" content="Portfolio for Femi Johnsn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='font-body max-w-[75%] pt-7 pb-[23px] z-10'>
        <main className='flex flex-col '>
          <nav className='text-white self-end w-fit'>
            <ul className='flex my-[14px]'>
              <li>
                <Link href="/photography">Photography</Link>
              </li>
              <li className='mx-8'>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <div className='ml-[-70px]'>
              <Image src="/assets/svg/navigation/arrow.svg" width={67} height={67} alt="Arrow"/>
            </div>
          </nav>
          <header className='w-2/5 mx-[65px]'>
            <div>
              <h1 className='font-normal font-cursive text-white text-heading'>Femi Johnsn</h1>
            </div>
            <div className='flex w-4/5 justify-between'>
              <p className='font-body text-white mt-[22px]'>Art, Eyes, Music & Women</p>
              <Image src="/assets/svg/home/smiley.svg" className='self-end mt-10' width={80} height={80} alt="Arrow"/>
            </div>
          </header>
        </main>
        <footer className="flex justify-between text-white mt-[200px] w-full">
          <div></div>
          <h3 className='justify-end'>femi johnsn  | All rights reserved  |  2022</h3>
        </footer>
      </div>
      <div className='max-w-[40%] w-full h-full absolute right-0 z-0'>
        <ImageSlider
          pictures={homepageImages}
          iterations={2}
        />
      </div>
    </div>
  )
}
