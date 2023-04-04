import DefaultLayout from "../../../components/layouts/default-layout";
import styles from '../../../styles/pages/AllPhotos.module.scss'
import Link from "next/link";
import { photosPreview } from "../../../utils/constants";
import PreviewLink from "../../../components/photography/preview-link";
import { classNames } from "../../../utils/classNames";
import { useRouter } from "next/router";

export default function AllPhotos() {
    const router = useRouter()
    const { type } = router.query

    const filteredPhotosPreview = type ? photosPreview.filter(pic => pic.type === type) : photosPreview

    return (
        <DefaultLayout
            className={styles["container"]}
            title="All Photos"
            showSubFooter={true}
            isNavDark={true}
            backButtonDestination={"/photography"}
            spinningLogoClassName="hidden"
        >
            <main className="flex mt-[111px] mx-[9%]">
                <section className="font-body sticky h-full top-[35%] w-full min-h-[350px] max-w-[300px]">
                    <h3
                        className="text-base-semi-bold uppercase text-secondary mb-4"
                    >
                        Filter by
                    </h3>
                    <ul>
                        <li
                            className={
                                classNames(
                                    "text-base-semi-bold uppercase text-secondary p-2 mb-1 duration-150",
                                    type === "indoors" ? "text-accent" : ""
                                )
                            }
                        >
                            <Link href="/photography/all?type=indoors">
                                Indoor
                            </Link>
                        </li>
                        <li
                            className={
                                classNames(
                                    "text-base-semi-bold uppercase text-secondary p-2",
                                    type === "outdoors" ? "text-accent" : ""
                                )
                            }
                        >
                            <Link href="/photography/all?type=outdoors">
                                Outdoor
                            </Link>
                        </li>
                    </ul>
                </section>
                <section>
                    <h4 className="text-display-4 font-cursive mb-14 text-secondary">
                        PRODIGY
                    </h4>
                    <div className={classNames("grid gap-8", styles["preview-grid"])}>
                        {
                            filteredPhotosPreview.map((pic) => {
                                if (pic.isLink) {
                                    return (
                                        <PreviewLink
                                            key={pic.id}
                                            picData={pic}
                                            imgClassName={"aspect-square"}
                                        />
                                    )
                                }
                            })
                        }
                    </div>
                </section>
            </main>
        </DefaultLayout>
    )
}