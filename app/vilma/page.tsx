import Image from 'next/image'
import styles from './page.module.css'

export default function page() {
    return (
        <div className={styles.container}>
            <div className={styles.h1}>
                <h1>VILMA</h1>
            </div>
            <div className={styles.imgcontainer}>
                <Image
                    className={styles.img}
                    src="/img_6258.JPG"
                    width={394}
                    height={591}
                    alt=''
                    quality={100}
                />
                <Image
                    className={styles.img}
                    src="/img_5438.JPG"
                    width={394}
                    height={591}
                    alt=''
                    quality={100}
                />
                <Image
                    className={styles.img}
                    src="/img_5438.JPG"
                    width={394}
                    height={591}
                    alt=''
                    quality={100}
                />
                <Image
                    className={styles.img}
                    src="/img_5438.JPG"
                    width={394}
                    height={591}
                    alt=''
                    quality={100}
                />
                <Image
                    className={styles.img}
                    src="/img_5438.JPG"
                    width={394}
                    height={591}
                    alt=''
                    quality={100}
                />
            </div>
        </div>
    )
}
