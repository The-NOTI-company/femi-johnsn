/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/components/ImageSlider.module.scss'

const ImageSlider = ({ pictures, iterations }) => {

    function replicateArray(array, n) {
        var arrays = Array.apply(null, new Array(n));
        arrays = arrays.map(function () { return array });
        return [].concat.apply([], arrays);
    }

    const imgArray = replicateArray(pictures, iterations)
    
    return (
        <div className={styles.container}>
            <div className={styles.slider}>
                {
                    imgArray.map((img, idx) => (
                        <div className={styles.slide} key={idx}>
                            <img src={img} alt="slide"/>
                        </div>    
                    ) )
                }
            </div>
        </div>
    )
}

export default ImageSlider