import DefaultLayout from "../../../components/layouts/default-layout";
import styles from '../../../styles/pages/AllPhotos.module.scss'

export default function AllPhotos() {
    return (
        <DefaultLayout
            className={styles["container"]}
            title="All Photos"
            showSubFooter={true}
            isNavDark={true}
            spinningLogoClassName="hidden"
        >
            <h1 className="text-heading-2 text-secondary text-center">In progress</h1>

        </DefaultLayout>
    )
}