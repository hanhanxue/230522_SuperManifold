

// 02 EXTERNAL

// 03 REACT / NEXTJS
import Link from 'next/link'


// 05 SUPERMANIFOLD COMPONENTS

// 07 SUPERMANIFOLD FUNCTIONS

// 11 SUPERMANIFOLD STYLES
import styles from "./Footer.module.scss"


const Footer = (  ) => {



    return (

    <>

<footer className={`${styles.section}`}>

        <div className={`${styles.topSection}`}> {/* SECTION */}
        <div className={`${styles.xFrame}`}> {/* X Frame */}
        <div className={`${styles.yFrameTop}`}> {/* Y Frame */}

            <nav className={`${styles.topSectionGrid}`}>
                <div className={`${styles.footerMenu} ${styles.gridColSpan4}`}>
                    <h2 className={`text-base-plus font-medium ${styles.menuTitle}`}>Super Manifold Inc.</h2>
                </div>
                <div className={`${styles.footerMenu} ${styles.gridColSpan2}`}>
                    <h2 className={`text-base-plus font-medium ${styles.menuTitle}`}>Menu</h2>
                    <ul className={`text-base-plus ${styles.menuList}`}>
                        <li className={` ${styles.menuListItem}`}>Experiences</li>
                        <li className={` ${styles.menuListItem}`}>Process</li>
                        <li className={` ${styles.menuListItem}`}>Info</li>
                        
                    </ul>
                </div>
                <div className={`${styles.footerMenu} ${styles.gridColSpan2}`}>
                    <h2 className={`text-base-plus font-medium ${styles.menuTitle}`}>Social</h2>
                    <ul className={`text-base-plus ${styles.menuListLast}`}>
                        <li className={` ${styles.menuListItem}`}>Instagram</li>
                        <li className={` ${styles.menuListItem}`}>Threads</li>
                        <li className={` ${styles.menuListItem}`}>LinkedIn</li>
                        <li className={` ${styles.menuListItem}`}>GitHub</li>
                    </ul>
                </div>
            </nav>

        </div> {/* Y Frame */}
        </div> {/* X Frame */}
        </div> {/* SECTION */}



        <div className={`${styles.bottomSection}`}> {/* SECTION */}
        <div className={`${styles.xFrame}`}> {/* X Frame */}
        <div className={`${styles.yFrameBottom}`}> {/* Y Frame */}
            <div className={`text-base-plus ${styles.bottomSectionGrid}`}>
                <p className={`${styles.yearSection}`}>©2023</p>
                <p className={`${styles.rightsSection}`}>All rights reserved.</p>
                <div className={`${styles.buttonSection}`}>
                <Link href="#top">
                <button className={`text-base-plus ${styles.footerBaseButton}`}>
             
                    {/* <svg  className={` ${styles.buttonIcon}`}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V22" stroke="black" strokeWidth="2"/>
                    <path d="M3 11L12 2L21 11" stroke="black" strokeWidth="2"/>
                    </svg> */}

                    <svg 
                    className={` ${styles.buttonIcon}`}
                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V22" strokeWidth="2"/>
                    <path d="M3 11L12 2L21 11" strokeWidth="2"/>
                    </svg>
                
                </button>
                </Link>
                </div>
            </div>
        </div> {/* Y Frame */}
        </div> {/* X Frame */}
        </div> {/* SECTION */}

    
        </footer>

    </>




    )
}

export default Footer