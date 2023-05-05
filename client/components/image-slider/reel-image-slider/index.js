/* eslint-disable @next/next/no-img-element */
import styles from '../../../styles/components/ReelImageSlider.module.scss'
import { classNames } from '../../../utils/classNames'

function ReelImageSlider({ pictures, iterations, direction, className }) {

    function replicateArray(array, n) {
        var arrays = Array.apply(null, new Array(n));
        arrays = arrays.map(function () { return array; });
        return [].concat.apply([], arrays);
    }

    const imgArray = replicateArray(pictures, iterations);

    return (
        <div className={ classNames(styles.container, className)} >
            <div className={styles.slider} style={{ animationDirection: `${direction}` }}>
                {imgArray.map((img, idx) => (
                    <div className={ classNames(styles.slide, 'max-w-[365px]')} key={idx}>
                        <img src={img} alt="slide" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReelImageSlider