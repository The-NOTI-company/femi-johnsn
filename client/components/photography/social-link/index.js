const SocialLink = ({ text, link }) => {
    return (
        <li className='mr-6 group'>
            <a href={link} className="flex items-center" target="_blank" rel="noreferrer">
                <p className='text-caption text-secondary mr-1'>{text}</p>
                <div className='group-hover:translate-x-1 duration-200 '>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.7817 7.33336L7.20566 3.75736L8.14833 2.8147L13.3337 8.00003L8.14833 13.1854L7.20566 12.2427L10.7817 8.6667H2.66699V7.33336H10.7817Z" fill="#F0F9F1"/>
                    </svg>
                </div>
            </a>
        </li>
    )
}

export default SocialLink