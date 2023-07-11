import Link from 'next/link';
import Image from 'next/image';

import styles from './HomeGrid.module.scss'



const HomeGrid = ({}) => {



    return (

        <>
        <section className={`${styles.section}`}> {/* SECTION */}
        <div className={`${styles.xFrame}`}> {/* X Frame */}
        <div className={`${styles.yFrame}`}> {/* Y Frame */}


        <div className={`${styles.productGrid}`}>

            <video autoPlay muted loop className={`${styles.product}  ${styles.gridColSpan2}`}>         
            <source src="/videos/supermanifold_breadboard_v2.mp4" type="video/mp4"/>         
            </video>


            <Image  className={`${styles.product}`}
                    src="/images/supermanifold_TRRS.jpg"
                            width={5120}
                            height={5120}
                    alt="Picture of the author"
            />
            <Image className={`${styles.product}`}
                    src="/images/supermanifold_TRRS.jpg"
                            width={5120}
                            height={5120}
                    alt="Picture of the author"
            />


        </div>


        </div> {/* Y Frame */}
        </div> {/* X Frame */}
        </section> {/* SECTION */}
        </>

    )
}

export default HomeGrid


