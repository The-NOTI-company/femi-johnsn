/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import styles from '../../styles/components/SpinningLogo.module.scss'
import { classNames } from "../../utils/classNames"

const SpinningLogo = ({className}) => {
    return (
        <div className={
                classNames(
                    "fixed w-full max-w-[164.71px] cursor-pointer hover:scale-75 duration-200 z-[4]",
                    className
                )
            }
        >
            <Link href="/work">
                <div className="relative">
                    <div className="w-full max-w-[64px] absolute top-[50px] left-[51px]">
                        <img
                            src={"/assets/svg/layout/logo-green.svg"}
                            className="w-full"
                            alt="Femi Johnsn's logo in green"
                        />
                    </div>
                    <div className={styles["rotate"]}>
                        <img
                            src={"/assets/svg/layout/ring-text.svg"}
                            className="block max-w-[164.71px] w-full"
                            alt="Instruction"
                        />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SpinningLogo