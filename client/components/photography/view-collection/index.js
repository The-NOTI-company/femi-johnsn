/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { classNames } from '../../../utils/classNames'
import ReelImageSlider from '../../image-slider/reel-image-slider'
import styles from "../../../styles/components/ViewCollection.module.scss"

function ViewCollection({ title, images }) {

    if (images?.length === 1) {
        return (
            <div className='w-full'>
                <img
                    className='w-full h-full object-cover'
                    src={images[0]}
                    alt={title}
                />
            </div>
        )
    }

    if (images?.length < 8) {
        return (
            <div className={ classNames('grid grid-cols-3 gap-[20px]', styles.collection)}>
                {
                    images.map((image, idx) => {
                        return (
                            <div className={classNames('h-full', styles.collectionImg)} key={idx}>
                                <img
                                    src={image}
                                    alt={title + idx}
                                    className='object-cover'
                                />
                            </div>
                        )
                    } )   
                }
            </div>
        )
    }

    if (images?.length >= 8) {
        const subGroupOne = images.slice(0, 3)
        const subGroupTwo = images.slice(4,7)
        const subGroupThree = images.slice(1,3)
        

        return (
            <div className='grid grid-cols-4 gap-[51px]'>
                <div className='w-full col-span-2'>
                    <img
                        className='w-full h-full object-cover'
                        src={images[0]}
                        alt={title + "1"}
                    />
                </div>
                <div className='w-full col-span-2'>
                    <img
                        className='w-full h-full object-cover'
                        src={images[1]}
                        alt={title + "2"}
                    />
                </div>
                
                <div className='col-span-4 overflow-x-hidden w-full'>
                    <div className={ classNames('rotate-[25deg] -translate-y-[240px] translate-x-[100px] grid grid-cols-4 gap-[20px] max-h-[80vh] w-full', styles.collectionSlider)}>
                        <ReelImageSlider pictures={subGroupOne} iterations={2} direction="normal" className="h-[200vh]"/>
                        <ReelImageSlider pictures={subGroupTwo} iterations={2} direction="reverse" className="h-[200vh]"/>
                        <ReelImageSlider pictures={subGroupThree} iterations={2} direction="normal" className="h-[200vh]" />
                        <ReelImageSlider pictures={subGroupOne} iterations={2} direction="reverse" className="h-[200vh]"/>
                    </div>
                </div>
                <div className='w-full col-span-4'>
                    <img
                        className='w-full object-cover max-h-[90vh]'
                        src={images[2]}
                        alt={title}
                    />
                </div>
                {
                    images?.slice(3,8).map((image, idx) => {
                        return (
                            <div className='items-stretch' key={idx}>
                                <img
                                    className='w-full'
                                    src={image} alt={title + idx}
                                />
                            </div>
                        ) 
                    } )   
                }
            </div>
        )
    }
    
}

export default ViewCollection