/* eslint-disable @next/next/no-img-element */
import styles from '../../../styles/components/LinearImageSlider.module.scss'
import { classNames } from '../../../utils/classNames'

function LinearImageSlider({ pictures, iterations, speed, className }) {

    function replicateArray(array, n) {
        var arrays = Array.apply(null, new Array(n));
        arrays = arrays.map(function () { return array; });
        return [].concat.apply([], arrays);
    }

    const imgArray = replicateArray(pictures, iterations);

    return (
        <div className={ classNames(styles.container, className)} style={{animationDuration: `${speed}s`}} >
            <div className={styles.slider}>
                {imgArray.map((img, idx) => (
                    <div className={styles.slide} key={idx}>
                        <img src={img} alt="slide" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LinearImageSlider