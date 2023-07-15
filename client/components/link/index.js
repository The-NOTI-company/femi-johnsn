import React , { memo, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LenisContext } from '../../context/lenisContext'


const CustomLink = (props) => {
    const {lenis} = useContext(LenisContext)
    const { push } = useRouter()

    return (
        <Link
            {...props}
            passHref
        >
            <a
                onClick={(e) => {
                    if ((!props.target || props.target === "_self") && props.scroll !== false) {
                        e.preventDefault()
                        push(props.href).then(() => {
                            lenis?.scrollTo(0,{
                                immediate: true,
                                lerp: 0.5
                            } )
                        })
                    }
                }}
            >
                {props.children}
            </a>
        </Link>
    )
}

export default memo(CustomLink)