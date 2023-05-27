import ReelImageSlider from "../../image-slider/reel-image-slider"


const GalleryReel = ({ photographyReel }) => {
    const { photosArrayOne, photosArrayThree, photosArrayTwo } = photographyReel
    
    return (
        <div className='-rotate-[25deg] -translate-y-[350px] -translate-x-[220px] grid grid-cols-6 gap-[14px] min-w-[175%] h-[70vh] breakpoint-iv:h-[100vh] breakpoint-iv:gap-6 breakpoint-iv:min-w-[150%]'>
            <ReelImageSlider pictures={photosArrayOne} iterations={2} direction="normal" className="h-[200vh]" />
            <ReelImageSlider pictures={photosArrayThree} iterations={2} direction="reverse"  className="h-[200vh]" />
            <ReelImageSlider pictures={photosArrayTwo} iterations={2} direction="normal" className="h-[200vh]" />
            <ReelImageSlider pictures={photosArrayOne} iterations={2} direction="reverse" className="h-[200vh]" />
            <ReelImageSlider pictures={photosArrayTwo} iterations={2} direction="normal" className="h-[200vh]" />
            <ReelImageSlider pictures={photosArrayThree} iterations={2} direction="reverse"  className="h-[200vh]" />
        </div>
    )
}

export default GalleryReel