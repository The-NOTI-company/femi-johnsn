/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/pages/Home.module.scss'
import { homepageImages } from '../utils/constants'
import ImageSlider from '../components/image-slider'
import { classNames } from '../utils/classNames'
import AnimationLayer from '../components/animation-layer'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Home | Femi Johnsn</title>
        <meta name="description" content="Portfolio for Femi Johnsn" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimationLayer>
        <div className={ classNames( "flex", styles.container)}>
          <div className='font-body w-[95%] pt-7 z-10 tablet:w-[80%] breakpoint-iii:w-[70%]'>
            <main className='flex flex-col min-h-[80vh]'>
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
                <div className='ml-[-70px] max-w-[42px] tablet:max-w-[67px]'>
                  <img src="/assets/svg/navigation/arrow.svg" className="w-full" alt="Arrow"/>
                </div>
              </nav>
              <header className='w-2/5 mx-[30px] tablet:mx-[65px]'>
                <div>
                  <h1 className={classNames('font-normal font-cursive text-white', styles.nameText)}>Femi Johnsn</h1>
                </div>
                <div className='flex w-full justify-between flex-col breakpoint-iv:flex-row breakpoint-iv:w-4/5'>
                  <p className='font-body text-white mt-[22px]'>Art, Eyes, Music & Women</p>
                  <img src="/assets/svg/home/smiley.svg" className='self-start mt-10 max-w-[50px] breakpoint-iii:self-end tablet:max-w-[80px]' alt="Smiley"/>
                </div>
              </header>
            </main>
            <footer className="flex justify-between text-white mt-[50px] w-full">
              <div></div>
              <h3 className='justify-end'>femi johnsn  | All rights reserved  |  2023</h3>
            </footer>
          </div>
          <div className='max-w-[60%] opacity-10 w-full h-full absolute right-0 z-0 bottom-0 tablet:max-w-[40%] breakpoint-iii:opacity-100'>
            <ImageSlider
              pictures={homepageImages}
              iterations={2}
            />
          </div>
          <a href="https://www.designnominees.com/sites/femi-johnsn" title="Design Nominees" style={{width:'70px', height:'130px', position:'fixed', top:'200px', right:0, zIndex:99999, textIndent:-'9999px', background: `url(${'http://www.designnominees.com/ribbons/designnominees-ribbon-sotd-white-right.png'}) no-repeat` }} target="_blank" rel="noreferrer"></a>
        </div>
      </AnimationLayer>
      
    </div>
  )
}
