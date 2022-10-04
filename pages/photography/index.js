import DefaultLayout from '../../components/layouts/default-layout'
import styles from '../../styles/pages/Photography.module.scss'

function Photography() {
    return (
        <DefaultLayout
            className={styles["container"]}
            title="Photography"
            showSubFooter={true}
            isNavDark={true}
        >
            <section className='px-[94px] pt-8'>
                <div className={styles["titles"]}>
                    <h1 className='font-cursive text-display-1 overflow-auto'>PHOTOGRAPHY  |   RETOUCHING</h1>
                    <h1 className='font-cursive text-display-1'>CREATIVE DIRECTION  |  EXHIBITION</h1>
                </div>
                <div>

                </div>
                <div>
                    <div className='flex justify-between text-secondary'>
                        <h6 className='font-cursive text-display-7'>Intro</h6>
                        <p className='max-w-[40%] text-base'>
                            Have you ever gazed into someone{"'"}s eyes and seen their souls, deepest secrets, and wildest fantasies? Come along with me on a tour through their illusion.
                        </p>
                        <div>
                            <h6 className='font-cursive text-display-7'>STAY UPDATED</h6>
                            <ul>

                            </ul>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </section>
            <section className=' mt-[80px] mb-[176px]'>
                <h3 className='text-display-3 font-cursive text-secondary'>It’s all bout the eyes</h3>
            </section>
            <section>

            </section>
        </DefaultLayout>
    )
}

export default Photography