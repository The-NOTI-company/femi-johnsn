/* eslint-disable @next/next/no-img-element */

const FeaturedPost = ({ name, postSrc, logoSrc }) => {
    return (
        <div className="max-w-[364px] relative mr-9">
            <img className="w-full" src={postSrc} alt={name} />
            <img className="absolute top-0 left-0 right-0 bottom-0 m-auto" src={logoSrc} alt={name} />
        </div>
    )
}

export default FeaturedPost