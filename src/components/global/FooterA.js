
// 02 EXTERNAL

// 03 REACT / NODE / NEXTJS


// 05 SUPERMANIFOLD COMPONENTS


// 07 SUPERMANIFOLD FUNCTIONS


// 11 SUPERMANIFOLD STYLES
import styles from './FooterA.module.scss'


export default function FooterA() {


    return (
        <>
        <div className={`${styles.footerSpacer}`}>
            <footer> 


                <div className={`${styles.footerGrid} ${styles.tile}`} >
                    <div className={`${styles.copyright}`}>
                        <p className={`brand-base`}>©2023</p>
                    </div>
                    <div className={`${styles.social}`}>
                        <ul className={`brand-base `}>
                            <li>Github</li>
                            <li>Instagram</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>

                
            </footer>

        </div>

        </>
    )
}