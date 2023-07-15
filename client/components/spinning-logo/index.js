/* eslint-disable @next/next/no-img-element */
import Link from "../link"
import styles from '../../styles/components/SpinningLogo.module.scss'
import { classNames } from "../../utils/classNames"

const SpinningLogo = ({className}) => {
    return (
        <div className={
                classNames(
                    "fixed w-full max-w-[100px] cursor-pointer hover:scale-75 duration-200 z-[4] breakpoint-iii:max-w-[164.71px]",
                    className
                )
            }
        >
            <Link href="/photography/all">
                <div className="relative">
                    <div className="w-full max-w-[48px] absolute top-[25px] left-[27px] breakpoint-iii:max-w-[64px] breakpoint-iii:top-[50px] breakpoint-iii:left-[51px]">
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