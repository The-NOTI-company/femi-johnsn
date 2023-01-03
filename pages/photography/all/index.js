import DefaultLayout from "../../../components/layouts/default-layout";
import styles from '../../../styles/pages/AllPhotos.module.scss'
import Link from "next/link";
import { photosPreview } from "../../../utils/constants";
import PreviewLink from "../../../components/photography/preview-link";
import { classNames } from "../../../utils/classNames";

export default function AllPhotos() {

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
                <section className="font-body fixed top-[35%]">
                    <h3
                        className="text-base-semi-bold uppercase text-secondary mb-4"
                    >
                        Filter by
                    </h3>
                    <ul>
                        <li
                            className="text-base-semi-bold uppercase text-secondary p-2 mb-1"
                        >
                            <Link href="/photography/all?type=indoor">
                                Indoor
                            </Link>
                        </li>
                        <li
                            className="text-base-semi-bold uppercase text-secondary p-2"
                        >
                            <Link href="/photography/all?type=outdoor">
                                Outdoor
                            </Link>
                        </li>
                    </ul>
                </section>
                <section className="ml-[400px]">
                    <h4 className="text-display-4 font-cursive mb-14 text-secondary">
                        PRODIGY
                    </h4>
                    <div className={classNames("grid gap-8", styles["preview-grid"])}>
                        {
                            photosPreview.map((pic) => {
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