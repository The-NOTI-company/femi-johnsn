import { useEffect, useRef } from 'react'
import DefaultLayout from '../../components/layouts/default-layout'
import styles from '../../styles/pages/Photography.module.scss'
import { classNames } from '../../utils/classNames'
import { featuredJobs, photographyReel, photosPreview } from '../../utils/constants'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import GalleryReel from '../../components/photography/gallery-reel'
import SocialLink from '../../components/photography/social-link'
import PreviewLink from '../../components/photography/preview-link'
import ArrowStory from '../../components/photography/arrow-story'
import Link from 'next/link'
import FeaturedPost from '../../components/photography/featured-post'


gsap.registerPlugin(ScrollTrigger)


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

    const renderPreview = () => (
        photosPreview.map((pic) => {
            if (pic.isLink) {
                return (
                    <PreviewLink
                        key={pic.id}
                        picData={pic}
                    />
                )
            }

            return (
                <ArrowStory
                    key={pic.id}
                    title={pic.title}
                    alternateArrow={pic.alternate}
                />
            )
        })
    
    )

    

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
                    <GalleryReel
                        photographyReel={photographyReel}
                    />
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
            <section className='flex flex-col mt-[80px] mb-[176px]'>
                <h3 className={ classNames('text-display-3 font-cursive text-secondary ml-[6%]', styles["home-gallery-title"] )}>It’s all bout the eyes</h3>
                <div className='grid grid-cols-3 gap-[22px] mt-[168px] ml-[4%] mr-[7%]'>
                    { renderPreview() }
                </div>
                <div className='font-body uppercase self-center'>
                    <Link href="/photography/all">
                        <div className='relative cursor-pointer'>
                            <div className="w-[320px] h-[320px] absolute flex hover:opacity-0 duration-300 rounded-full border-[3px] border-accent bg-primary">
                                <p className="m-auto text-center text-accent text-base-big">Traverse</p>
                            </div>
                            <div className="w-[320px] h-[320px] flex rounded-full bg-accent">
                                <p className="m-auto text-center text-secondary text-base-big">See more</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
            <section className='mx-[75px] mb-96'>
                <h3 className='text-display-3 font-cursive text-secondary uppercase'>Featured in</h3>
                <div className='flex my-[86px] ml-[5%]'>
                    {
                        featuredJobs.map((job) => {
                            return (
                                <FeaturedPost
                                    key={job.id}
                                    name={job.name}
                                    postSrc={job.postSrc}
                                    logoSrc={job.logoSrc}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </DefaultLayout>
    )
}

export default Photography