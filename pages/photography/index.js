import Head from 'next/head'
import Footer from '../../components/footer/index'
import styles from '../../styles/pages/Photography.module.scss'

function Photography() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Photography | Femi Johnsn</title>
                <meta name="description" content="Portfolio for Femi Johnsn" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <nav>

                </nav>
                <main>

                </main>
                <Footer showSubFooter={true}/>
            </div>
        </div>
    )
}

export default Photography