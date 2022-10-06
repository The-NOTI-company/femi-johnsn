import Image from "next/image"
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
                        <Image
                            src={"/assets/svg/layout/logo-green.svg"}
                            width={64}
                            height={64}
                            layout="responsive"
                            className="w-full"
                            alt="Femi Johnsn's logo in green"
                        />
                    </div>
                    <div className={styles["rotate"]}>
                        <Image
                            src={"/assets/svg/layout/ring-text.svg"}
                            width={164.71}
                            height={164.53}
                            layout="responsive"
                            className="block"
                            alt="Instruction"
                        />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SpinningLogo