import { useEffect, useRef } from 'react'
import DefaultLayout from '../../components/layouts/default-layout'
import styles from '../../styles/pages/Photography.module.scss'
import { classNames } from '../../utils/classNames'
import LinearImageSlider from '../../components/image-slider/linear-image-slider'
import { photosArrayOne, photosArrayThree, photosArrayTwo } from '../../utils/photographySlider'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Gallery = () => {
    return (
        <div className='-rotate-[25deg] -translate-y-[320px] -translate-x-[320px] flex gap-[24px] min-w-[150%] h-[100vh]'>
            <LinearImageSlider pictures={photosArrayOne} iterations={2} className="h-[200vh]" />
            <LinearImageSlider pictures={photosArrayThree} iterations={2} className="h-[200vh] mt-6" />
            <LinearImageSlider pictures={photosArrayTwo} iterations={2} className="h-[200vh] mt-9" />
            <LinearImageSlider pictures={photosArrayOne} iterations={2} className="h-[200vh] mt-12" />
        </div>
    )
}

function Photography() {

    const galleryContainer = useRef()
    const headerTitles = useRef()

    useEffect(() => {
        document.getElementById('titles').style.overflow ="hidden"
        const titleOne = document.getElementById("title-1")
        const titleTwo = document.getElementById("title-2")


        window.onscroll = () => {
            let scrollPos = window.scrollY
            titleOne.style.translate = `-${scrollPos}px 0`
            titleTwo.style.translate = `${scrollPos}px 0`
        }
        
        gsap.to(galleryContainer.current, {
            scale: 1.13,
            overflowY: 'hidden',
            scrollTrigger: {
                trigger: headerTitles.current,
                start: "top top",
                scrub: true
            },
        })
    })

    const SocialLink = ({ text, link }) => {
        return (
            <li className='mr-6 group'>
                <a href={link} className="flex items-center" target="_blank" rel="noreferrer">
                    <p className='text-caption text-secondary mr-2'>{text}</p>
                    <div className='group-hover:translate-x-1 duration-200'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7817 7.33336L7.20566 3.75736L8.14833 2.8147L13.3337 8.00003L8.14833 13.1854L7.20566 12.2427L10.7817 8.6667H2.66699V7.33336H10.7817Z" fill="#F0F9F1"/>
                        </svg>
                    </div>
                </a>
            </li>
        )
    }
    

    return (
        <DefaultLayout
            className={styles["container"]}
            title="Photography"
            showSubFooter={true}
            isNavDark={true}
            spinningLogoClassName="bottom-12 right-[72px]"
        >
            <section className='px-[94px] pt-8' >
                <div className={styles["titles"]} id="titles" ref={headerTitles}>
                    <h1 className='font-cursive text-display-1 whitespace-nowrap' id='title-1'>PHOTOGRAPHY  |   RETOUCHING</h1>
                    <h1 className='font-cursive text-display-1 whitespace-nowrap -translate-x-[60%]' id='title-2'>CREATIVE DIRECTION  |  EXHIBITION</h1>
                </div>
                <div ref={galleryContainer} className={ classNames(styles["gallery-container"], 'overflow-hidden mt-10')}>
                    <Gallery/>
                </div>
                <div className='flex justify-between text-secondary mt-[336px] mb-[304px]'>
                    <h6 className='font-cursive text-display-7'>Intro</h6>
                    <p className='max-w-[40%] text-base'>
                        Have you ever gazed into someone{"'"}s eyes and seen their souls, deepest secrets, and wildest fantasies? Come along with me on a tour through their illusion.
                    </p>
                    <div>
                        <h6 className='font-cursive text-display-7'>STAY UPDATED</h6>
                        <ul className='flex mt-4'>
                            <SocialLink
                                text="Twitter"
                                link="https://twitter.com/femijohnsn"
                            />
                            <SocialLink
                                text="Behance"
                                link="https://www.behance.net/femijohnsn"
                            />
                            <SocialLink
                                text="Instagram"
                                link="https://www.instagram.com/femijohnsn/?hl=en"
                            />
                        </ul>
                    </div>
                </div>
            </section>
            <section className='mt-[80px] mb-[176px]'>
                <h3 className={ classNames('text-display-3 font-cursive text-secondary ml-[6%]', styles["home-gallery-title"] )}>It’s all bout the eyes</h3>

            </section>
            <section className='mx-[75px]'>
                <h3 className='text-display-3 font-cursive text-secondary uppercase'>Featured in</h3>


            </section>
        </DefaultLayout>
    )
}

export default Photography