import ReelImageSlider from "../../image-slider/reel-image-slider"


const GalleryReel = ({ photographyReel }) => {
    const { photosArrayOne, photosArrayThree, photosArrayTwo } = photographyReel
    
    return (
        <div className='-rotate-[25deg] -translate-y-[350px] -translate-x-[220px] flex gap-[24px] min-w-[150%] h-[100vh]'>
            <ReelImageSlider pictures={photosArrayOne} iterations={2} direction="normal" className="h-[200vh]" />
            <ReelImageSlider pictures={photosArrayThree} iterations={2} direction="reverse"  className="h-[200vh]" />
            <ReelImageSlider pictures={photosArrayTwo} iterations={3} direction="normal" className="h-[200vh]" />
            <ReelImageSlider pictures={photosArrayOne} iterations={2} direction="reverse" className="h-[200vh]" />
            <ReelImageSlider pictures={photosArrayTwo} iterations={3} direction="normal" className="h-[200vh]" />
            <ReelImageSlider pictures={photosArrayThree} iterations={2} direction="reverse"  className="h-[200vh]" />
        </div>
    )
}

export default GalleryReel