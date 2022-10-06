import { classNames } from "../../../utils/classNames"

const ArrowStory = ({ title, alternateArrow }) => {
    return (
        <div className={ classNames("relative self-center", alternateArrow && "ml-12")}>
            <div className={ classNames("hover:opacity-0 absolute duration-500 ", alternateArrow && "rotate-[70.11deg]")}>
                <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="160" cy="160" r="158.5" fill="#050606" stroke="#00A86B" strokeWidth="3"/>
                    <path d="M124.947 120.558L116.217 130.498L176.604 183.534L150.495 185.701L150.409 198.832L199.888 195.625L196.681 146.145L184.114 147.422L185.778 173.089L125.39 120.054C125.395 120.048 125.061 119.76 124.893 119.617" stroke="#00A86B" strokeWidth="2"/>
                </svg>
            </div>
            <div className="flex rounded-full w-[320px] h-[320px] bg-accent">
                <p className="font-story m-auto text-center text-secondary text-4xl">{title}</p>
            </div>
        </div>
    )
}

export default ArrowStory