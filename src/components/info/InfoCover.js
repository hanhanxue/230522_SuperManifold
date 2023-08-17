
// 02 EXTERNAL

// 03 REACT / NODE / NEXTJS
import Image from 'next/image'

// 05 SUPERMANIFOLD COMPONENTS

// 07 SUPERMANIFOLD FUNCTIONS

// 11 SUPERMANIFOLD STYLES
import styles from './InfoCover.module.scss'



const InfoCover = ({}) => {



    return (

        <>
        <section className={`${styles.section}`}> {/* SECTION */}
            {/* <div className={`${styles.heroBackground}`}>
            <Image 
                className={`${styles.heroBackgroundImage}`}
                src={`/assets/images/image2.jpg`}
                fill={true}

                alt=''
                />
            </div> */}
        <div className={`${styles.xFrame}`}> {/* X Frame */}
        <div className={`${styles.yFrame}`}> {/* Y Frame */}



        <div className={`${styles.rowTop}`}>
            <div className={`${styles.topBar}`}>

                <h2 className={`text-xl ${styles.subTextTop}`}>
                        A research and development led <br />
                        design practice
                </h2>
                <h2 className={`text-xl ${styles.subTextTopSmall}`}>
                        A research and development led design practice
                </h2>

            </div>
        </div>

        <div className={`${styles.rowMiddle}`}>
            <h1 className={`text-hero ${styles.heroText}`}>
                We craft immersive <br />
                spatial experiences in <br />
                the digital realm.
            </h1>
            <h1 className={`text-hero ${styles.heroTextSmall}`}>
                We craft immersive spatial experiences in the digital realm.
            </h1>
        </div>


        <div className={`${styles.rowBottom}`}>
                <div className={`${styles.rowBottomTopFrame}`}>
                <h2 className={`text-xl ${styles.subTextBottom}`}>
                        Based in Montreal, <br />
                        Canada
                </h2>
                <h2 className={`text-xl ${styles.subTextBottomSmall}`}>
                        Based in Montreal, Canada
                </h2>


                </div>

        </div>



        <div className={`${styles.rowBottomBottomFrame}`}>
            <div className={`${styles.scrollIconFrame}`}>
                <div className={`${styles.scrollBar}`}></div>
            </div>
        </div>

        </div> {/* Y Frame */}
        </div> {/* X Frame */}
        </section> {/* SECTION */}
        </>

    )
}

export default InfoCover


