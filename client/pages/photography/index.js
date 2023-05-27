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
import { horizontalLoop } from '../../utils/gsapFunctions'


gsap.registerPlugin(ScrollTrigger)


function Photography() {
    const galleryContainer = useRef()
    const headerTitles = useRef()

    useEffect(() => {
        document.getElementById('titles').style.overflow ="hidden"
        const titleOne = document.getElementById("title-1")
        const titleTwo = document.getElementById("title-2")


        let textOne = horizontalLoop(titleOne, {
            repeat: -1,
            speed: 0.1,
            draggable: false,
            reversed: false,
        });

        let textTwo = horizontalLoop(titleTwo, {
            repeat: -1,
            speed: 0.1,
            draggable: false,
            reversed: true,
        });
        
        
        window.addEventListener("scroll", () => {
            gsap.to(textOne, { timeScale: 1, overwrite: false,});
            gsap.to(textTwo, { timeScale: -1 , overwrite: false});
        });

        gsap.to(galleryContainer.current, {
            scale: 1.10,
            overflowY: 'hidden',
            overflowX: "hidden",
            scrollTrigger: {
                trigger: headerTitles.current,
                start: "top top",
                scrub: true
            },
        })
    }, [])

    const renderPreview = () => (
        photosPreview.map((pic) => {
            if (pic.isLink) {
                return (
                    <PreviewLink
                        key={pic.id}
                        picData={pic}
                        borderBottom={true}
                        containerClassName={"mb-12 border-b-white border-b-2 tablet:mb-44"}
                        imgClassName='w-full'
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
            spinningLogoClassName="bottom-12 right-[30px] breakpoint-iii:right-[72px]"
        >
            <main className="mt-[111px]">
                <section className='px-[5%] pt-0 laptop:px-[94px] laptop:pt-8' >
                    <div className={ classNames("hidden breakpoint-iv:block",styles["titles"])} id="titles" ref={headerTitles}>
                        <h1 className='font-cursive text-display-1 whitespace-nowrap' id='title-1'>PHOTOGRAPHY  |   RETOUCHING | PHOTOGRAPHY  |   RETOUCHING</h1>
                        <h1 className='font-cursive text-display-1 whitespace-nowrap' id='title-2'>CREATIVE DIRECTION  |  EXHIBITION | CREATIVE DIRECTION  |  EXHIBITION</h1>
                    </div>
                    <div ref={galleryContainer} className={ classNames(styles["gallery-container"], 'overflow-hidden mt-10 block')}>
                        <GalleryReel
                            photographyReel={photographyReel}
                        />
                    </div>
                    <div className='flex flex-col justify-between text-secondary mt-[150px] mb-[50px] laptop:mb-[304px] laptop:mt-[336px] laptop:flex-row'>
                        <h6 className='font-cursive text-display-7'>Intro</h6>
                        <p className='mt-6 max-w-[95%] text-heading-6 laptop:max-w-[40%] laptop:mt-0 laptop:text-base'>
                            Have you ever gazed into someone{"'"}s eyes and seen their souls, deepest secrets, and wildest fantasies? Come along with me on a tour through their illusion.
                        </p>
                        <div className='hidden laptop:block'>
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
                    <h3 className={
                        classNames(
                            'text-heading-3 font-cursive text-secondary ml-[6%] tablet:text-display-4 breakpoint-iii:text-display-3',
                            styles["home-gallery-title"]
                        )
                    }>
                        It’s all bout the eyes
                    </h3>
                    <div className='grid grid-cols-responsive-preview-grid gap-[22px] mt-[168px] ml-[4%] mr-[4%] breakpoint-i:mr-[7%] breakpoint-i:grid-cols-3'>
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
                <section className='mx-[4%] mb-96 breakpoint-vi:mx-[75px]'>
                    <h3 className='text-heading-3 font-cursive text-secondary uppercase tablet:text-display-4 breakpoint-iii:text-display-3'>Featured in</h3>
                    <div className='flex flex-wrap my-[86px] ml-[5%] gap-4'>
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
            </main>
           
        </DefaultLayout>
    )
}

export default Photography